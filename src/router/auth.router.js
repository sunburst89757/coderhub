const Router = require("koa-router");
const { login, test } = require("../controller/auth.controller");
const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware");
const authRouter = new Router();
//  注册前要校验 要加密
authRouter.get("/login", verifyLogin, login);
authRouter.get("/test", verifyAuth, test);
module.exports = authRouter;
