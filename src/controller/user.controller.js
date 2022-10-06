// 具体接口的处理逻辑
const service = require("../service/user.service");
class UserController {
  async register(ctx, next) {
    // 1.获取用户请求数据
    console.log(ctx.request.body);
    // 2.数据库操作
    const user = await service.register(ctx.request.body);
    console.log(user, "userInfo");

    // 3.接口返回
    ctx.body = "register success";
  }
}
module.exports = new UserController();
