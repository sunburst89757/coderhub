const service = require("../service/moment.service");
class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { userId } = ctx;
    const res = await service.createMomentByUserId(userId, content);
    ctx.body = res[0];
  }
  // 查看某个人的动态
  async queryMoment(ctx, next) {
    const { userId } = ctx.params;
    const res = await service.getMomentsByUserId(userId);
    ctx.body = res;
  }
  async deleteOneMoment(ctx, next) {
    const { momentId } = ctx.request.params;
    const userId = ctx.userId;
    const res = await service.deleteMoment(momentId, userId);
    if (res.affectedRows === 0) {
      ctx.body = "删除失败 只有本人才可以操作该动态";
    } else {
      ctx.body = "删除成功";
    }
  }
  async updateMoment(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const userId = ctx.userId;
    const res = await service.updateMoment(userId, momentId, content);
    if (res.affectedRows === 0) {
      ctx.body = "修改失败 只有本人才可以操作该动态";
    } else {
      ctx.body = "修改成功";
    }
  }
}

module.exports = new MomentController();
