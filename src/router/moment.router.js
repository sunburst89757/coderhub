const Router = require("koa-router");
const { create, queryMoment } = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const momentRouter = new Router({ prefix: "/moment" });
// 创建动态
momentRouter.post("/create", verifyAuth, create);
// 查看动态 (公开的动态)
momentRouter.get("/query/:userId", queryMoment);

module.exports = momentRouter;
