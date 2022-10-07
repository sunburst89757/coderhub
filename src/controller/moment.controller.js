const service = require("../service/moment.service");
class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { userId } = ctx;
    const res = await service.createMomentByUserId(userId, content);
    ctx.body = res[0];
  }
}

module.exports = new MomentController();
