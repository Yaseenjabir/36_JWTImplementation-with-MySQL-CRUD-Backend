const connection = require("../../Database/dbRef");

function getProductList(req, res) {
  const email = req.user.email;

  const query = "SELECT * FROM products WHERE user_email = ?";
  connection.query(query, [email], (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({ success: false, message: "No data available" });
    }
    return res.status(200).json({ success: true, result });
  });
}

module.exports = getProductList;
