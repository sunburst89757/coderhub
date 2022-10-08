const Router = require("koa-router");
const { create, reply, update,remove } = require("../controller/comment.controller");
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");
const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/create", verifyAuth, create);
commentRouter.post("/reply", verifyAuth, reply);
commentRouter.patch(
  "/update/:id",
  verifyAuth,
  verifyPermission("comments"),
  update
);
commentRouter.delete(
    "/delete/:id",
    verifyAuth,
    verifyPermission("comments"),
    remove
  );

module.exports = commentRouter;
