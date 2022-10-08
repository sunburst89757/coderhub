const service = require("../service/comment.service");
class CommentController {
  async create(ctx, next) {
    const userId = ctx.userId;
    const { content, momentId } = ctx.request.body;
    const res = await service.createComment(userId, momentId, content);
    ctx.body = res;
  }
  async reply(ctx, next) {
    const userId = ctx.userId;
    const { commentId, momentId, content } = ctx.request.body;
    const res = await service.replyComment(
      userId,
      commentId,
      momentId,
      content
    );
    ctx.body = res;
  }
  async update(ctx, next) {
    const { content } = ctx.request.body;
    const { id } = ctx.params;
    console.log(id, content);
    const res = await service.updateComment(id, content);
    ctx.body = res;
  }
  async remove(ctx, next) {
    const { id } = ctx.params;
    const res = await service.removeComment(id);
    ctx.body = res;
  }
}

module.exports = new CommentController();
