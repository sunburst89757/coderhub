const { verify } = require("jsonwebtoken");
const Router = require("koa-router");
const {
  create,
  queryMoment,
  deleteOneMoment,
} = require("../controller/moment.controller");
const { verifyAuth,verifySelf } = require("../middleware/auth.middleware");
const momentRouter = new Router({ prefix: "/moment" });
// 创建动态
momentRouter.post("/create", verifyAuth, create);
// 查看动态 (公开的动态)
momentRouter.get("/query/:userId", queryMoment);
//  删除动态
momentRouter.get("/delete", verifyAuth, verifySelf ,deleteOneMoment);

module.exports = momentRouter;
