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
    const { userId, momentId } = ctx.request.body;
    await service.deleteMoment(userId, momentId);
    ctx.body = "删除成功";
  }
}

module.exports = new MomentController();
