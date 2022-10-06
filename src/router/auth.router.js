const Router = require("koa-router");
const { login } = require("../controller/auth.controller");
const { verifyLogin } = require("../middleware/auth.middleware");
const authRouter = new Router();
//  注册前要校验 要加密
authRouter.get("/login", verifyLogin,login);
module.exports = authRouter;
