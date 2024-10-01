const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userRouter = require("./Routes/userRoutes");
const productRouter = require("./Routes/productRoute");
const verifyToken = require("./MiddleWares/VerifyToken");

app.use(express.json());
app.use(cookieParser());
app.use("/authenticateUser", userRouter);
app.use("/user", verifyToken, productRouter);
app.listen(5000);
