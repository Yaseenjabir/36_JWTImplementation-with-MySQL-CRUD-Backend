const connection = require("../../Database/dbRef");

function addProduct(req, res) {
  const { name, price, color } = req.body;

  const user_email = req.user.email;

  const query =
    "INSERT INTO products (name, price, color,user_email ) VALUES (?, ?, ?, ?)";

  connection.query(query, [name, price, color, user_email], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong!" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Product added successfully", result });
  });
}

module.exports = addProduct;
