const {
  USERNAME_OR_PASSWORD_IS_NOT_EMPTY,
} = require("../constants/errorTypes");
async function verifyUser(ctx, next) {
  // 1. 获取用户请求数据
  const { username, password } = ctx.request;
  // 2.判断用户名密码不为空
  if (!username || !password) {
    const error = new Error(USERNAME_OR_PASSWORD_IS_NOT_EMPTY);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
}

module.exports = {
  verifyUser,
};
