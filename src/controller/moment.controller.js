const service = require("../service/moment.service");
class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { userId } = ctx;
    const res = await service.createMomentByUserId(userId, content);
    ctx.body = res[0];
  }
  async getMomentById(ctx, next) {
    const { id } = ctx.params;
    const res = await service.getMomentById(id);
    ctx.body = res;
  }
  // 查看动态列表
  async getMomentList(ctx, next) {
    const { userId, pageNum, pageSize } = ctx.request.query;
    console.log(pageNum, pageSize);
    const res = await service.getMomentList(userId, pageNum, pageSize);
    ctx.body = res;
  }
  async remove(ctx, next) {
    const { momentId } = ctx.request.params;
    const res = await service.deleteMoment(momentId);
    ctx.body = res;
  }
  async update(ctx, next) {
    const { momentId } = ctx.request.params;
    const { content } = ctx.request.body;
    const res = await service.updateMoment(momentId, content);
    ctx.body = res;
  }
}

module.exports = new MomentController();
