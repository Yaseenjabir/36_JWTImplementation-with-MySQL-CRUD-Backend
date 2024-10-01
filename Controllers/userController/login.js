const connection = require("../../Database/dbRef");
const JWT = require("jsonwebtoken");

const SECRET_KEY = "key1234";

function login(req, res) {
  const { email } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";

  connection.query(query, [email], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No user available with this credentials",
      });
    }

    const user = result[0];

    const token = JWT.sign({ _id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "2h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 2 * 60 * 60 * 1000,
    });

    res.status(201).json({ success: true, message: "You're logged in" });
  });
}

module.exports = login;
