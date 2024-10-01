const express = require("express");
const addProduct = require("../Controllers/userController/addProduct");
const getProductList = require("../Controllers/userController/getProductList");
const updateProduct = require("../Controllers/userController/updateProduct");
const deleteProduct = require("../Controllers/userController/deleteProduct");
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/getProductList", getProductList);
router.put("/updateProduct", updateProduct);
router.delete("/deleteProduct", deleteProduct);

module.exports = router;
