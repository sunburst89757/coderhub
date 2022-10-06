const {
  USERNAME_OR_PASSWORD_IS_NOT_EMPTY,
  USERNAME_ALREADY_EXISTS,
} = require("../constants/errorTypes");

const service = require("../service/user.service");
async function verifyUser(ctx, next) {
  // 1. 获取用户请求数据
  const { username, password } = ctx.request.body;
  // 2.判断用户名密码不为空
  if (!username || !password) {
    const error = new Error(USERNAME_OR_PASSWORD_IS_NOT_EMPTY);
    return ctx.app.emit("error", error, ctx);
  }
  //   3.判断用户名唯一
  const result = await service.getUserByUsername(username);
  if (result.length === 1) {
    const error = new Error(USERNAME_ALREADY_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
}

module.exports = {
  verifyUser,
};
