const Router = require("koa-router");
const { create } = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/auth.middleware");
const momentRouter = new Router({ prefix: "/moment" });
momentRouter.post("/create", verifyAuth, create);
module.exports = momentRouter;
