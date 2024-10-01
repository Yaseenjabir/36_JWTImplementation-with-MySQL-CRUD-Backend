const express = require("express");
const app = express();
const connection = require("../../Database/dbRef");

function registerUser(req, res) {
  const { name, email, password } = req.body;

  const findUserQuery = "SELECT * FROM users WHERE email = ?";
  connection.query(findUserQuery, [email], (err, result) => {
    if (err) {
      console.log("Error occurred:", err);
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong!" });
    }

    if (result.length > 0) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists in database" });
    }
    const insertQuery =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    connection.query(insertQuery, [name, email, password], (err, result) => {
      if (err) {
        console.log("Error occurred:", err);
        return res.status(500).json({ success: false, message: err });
      }
      res.status(201).json({
        success: true,
        message: "User signed up successfully",
        user_id: result.insertId,
      });
    });
  });
}

module.exports = registerUser;
