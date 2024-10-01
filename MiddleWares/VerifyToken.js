const JWT = require("jsonwebtoken");

const SECRET_KEY = "key1234";

function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  JWT.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
    req.user = user;
    next();
  });
}

module.exports = verifyToken;
