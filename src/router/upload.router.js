const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { saveAvatarInfo,avatarInfo } = require("../controller/upload.controller");
const { avatarHandler } = require("../middleware/file.middleware");
const uplodaRouter = new Router({ prefix: "/upload" });
uplodaRouter.post("/avatar", verifyAuth, avatarHandler, saveAvatarInfo);
uplodaRouter.get("/:id",avatarInfo);
module.exports = uplodaRouter;
