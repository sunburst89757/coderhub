class AuthController {
  async login(ctx, next) {
    const { username, password } = ctx.request.body;
    ctx.body = "login success";
  }
}
module.exports = new AuthController();
