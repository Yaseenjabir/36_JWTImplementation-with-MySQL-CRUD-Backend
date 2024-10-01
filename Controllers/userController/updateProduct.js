const connection = require("../../Database/dbRef");

function updateProduct(req, res) {
  const { _id, name, price, color } = req.body;

  const query =
    "UPDATE products SET name = ?, price = ?, color = ? WHERE _id = ?";

  connection.query(query, [name, price, color, _id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Data updated", result });
  });
}

module.exports = updateProduct;
