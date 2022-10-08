const Router = require("koa-router");
const {
  create,
  getMomentList,
  remove,
  update,
  getMomentById,
} = require("../controller/moment.controller");
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");
const momentRouter = new Router({ prefix: "/moment" });
// 创建动态
momentRouter.post("/create", verifyAuth, create);
// 查看单条动态
momentRouter.get("/detail/:id", getMomentById);
// 查看动态列表
momentRouter.get("/list", getMomentList);
//  删除动态 删除和修改都必须校验是否是本人操作
momentRouter.delete("/delete/:momentId", verifyAuth, verifyPermission, remove);
//  修改动态
momentRouter.patch("/update/:momentId", verifyAuth, verifyPermission, update);

module.exports = momentRouter;
