const Router = require("koa-router");
const { create } = require("../controller/label.controller");
const labelRouter = new Router({ prefix: "/label" });

labelRouter.post("/create", create);

module.exports = labelRouter;
