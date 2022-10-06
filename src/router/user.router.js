const Router = require("koa-router");
const { register } = require("../controller/user.controller");
const {
  verifyUser,
  encryptPassword,
} = require("../middleware/user.middleware");
const userRouter = new Router({ prefix: "/user" });
//  注册前要校验 要加密
userRouter.post("/register", verifyUser, encryptPassword, register); 
module.exports = userRouter;
