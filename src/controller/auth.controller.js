const jwt = require("jsonwebtoken");
const { PRIVATE_KEY, PUBLIC_KEY } = require("../app/config");
class AuthController {
  async login(ctx, next) {
    const { username, userId } = ctx.userInfo;
    const token = jwt.sign({ userId, username }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });
    ctx.body = {
      userId,
      username,
      token,
    };
  }
  async test(ctx, next) {
    ctx.body = "授权成功";
  }
}
module.exports = new AuthController();
