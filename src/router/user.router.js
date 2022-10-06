const Router = require("koa-router");
const { register } = require("../controller/user.controller");
const { verifyUser } = require("../middleware/user.middleware");
const userRouter = new Router({ prefix: "/user" });
//  校验用户注册中间件
userRouter.post("/register", verifyUser, register);
module.exports = userRouter;
