const service = require("../service/upload.service");
const { APP_HOST, APP_PORT } = require("../app/config");
const fs = require("fs");
class UploadController {
  async saveAvatarInfo(ctx, next) {
    const userId = ctx.userId;
    console.log(userId);

    // 保存图像
    const res = await service.saveAvatar(userId, ctx.req.file);
    //  插入到用户表
    const avatarUrl = `${APP_HOST}:${APP_PORT}/upload/${userId}`;
    await service.insertAvatarIntoUsers(userId, avatarUrl);
    ctx.body = res;
  }
  async avatarInfo(ctx, next) {
    const { id } = ctx.params;
    const avatarInfo = await service.getAvatarbyUserId(id);
    console.log(avatarInfo);

    ctx.response.set("content-type", avatarInfo[0].mimetype);
    ctx.body = fs.createReadStream(
      `./uploads/avatar/${avatarInfo[0].filename}`
    );
  }
}

module.exports = new UploadController();
