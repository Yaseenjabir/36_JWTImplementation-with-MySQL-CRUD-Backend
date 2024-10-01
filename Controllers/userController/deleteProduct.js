const connection = require("../../Database/dbRef");

function deleteProduct(req, res) {
  const { _id } = req.body;

  const query = "DELETE FROM products WHERE _id = ?";

  connection.query(query, [_id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
    return res.status(200).json({
      success: true,
      message: "Item has been deleted successfully",
      result,
    });
  });
}

module.exports = deleteProduct;
