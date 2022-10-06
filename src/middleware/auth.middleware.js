const {
  USERNAME_OR_PASSWORD_IS_NOT_EMPTY,
  PASSWORD_IS_NOT_CORRECT,
} = require("../constants/errorTypes");
const { getUserByUsername } = require("../service/user.service");
const { md5Password } = require("../utils/handlePassword");
const verifyLogin = async (ctx, next) => {
  // 1. 获取用户请求数据
  const { username, password } = ctx.request.body;
  // 2.判断用户名密码不为空
  if (!username || !password) {
    const error = new Error(USERNAME_OR_PASSWORD_IS_NOT_EMPTY);
    return ctx.app.emit("error", error, ctx);
  }
  // 3.验证密码是否正确
  const res = await getUserByUsername(username);
  if (res[0].password !== md5Password(password)) {
    const error = new Error(PASSWORD_IS_NOT_CORRECT);
    // 必须return 函数才能停止
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
module.exports = {
  verifyLogin,
};
