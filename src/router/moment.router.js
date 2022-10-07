const { verify } = require("jsonwebtoken");
const Router = require("koa-router");
const {
  create,
  queryMoment,
  deleteOneMoment,
  updateMoment,
} = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const momentRouter = new Router({ prefix: "/moment" });
// 创建动态
momentRouter.post("/create", verifyAuth, create);
// 查看动态 (公开的动态)
momentRouter.get("/query/:userId", queryMoment);
//  删除动态
momentRouter.get("/delete/:momentId", verifyAuth, deleteOneMoment);
//  修改动态
momentRouter.post("/update", verifyAuth, updateMoment);

module.exports = momentRouter;
