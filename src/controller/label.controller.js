const service = require("../service/label.service");
class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    // const res = await service.createLabel(name);
    console.log(Array.isArray(name));

    ctx.body = name;
  }
}
module.exports = new LabelController();
