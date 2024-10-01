const express = require("express");
const router = express.Router();
const registerUser = require("../Controllers/userController/registration");
const login = require("../Controllers/userController/login");

router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
