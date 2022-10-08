const jwt = require("jsonwebtoken");
const { PUBLIC_KEY } = require("../app/config");
const {
  USERNAME_OR_PASSWORD_IS_NOT_EMPTY,
  PASSWORD_IS_NOT_CORRECT,
  UNAUTHORIZATION,
  USER_DOES_NOT_EXITS,
  UNPERMISSION,
} = require("../constants/errorTypes");
const userService = require("../service/user.service");
const authService = require("../service/auth.service");
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
  const res = await userService.getUserByUsername(username);
  // 验证用户名是否存在
  if (!res.length) {
    const error = new Error(USER_DOES_NOT_EXITS);
    return ctx.app.emit("error", error, ctx);
  }
  if (res[0].password !== md5Password(password)) {
    const error = new Error(PASSWORD_IS_NOT_CORRECT);
    // 必须return 函数才能停止
    return ctx.app.emit("error", error, ctx);
  }
  //  登录成功后用这个信息进行token加密
  ctx.userInfo = res[0];
  await next();
};
const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  try {
    // 验证成功
    const res = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    // 验证登录成功后给后续中间件ctx加上userId
    ctx.userId = res.userId;
    await next();
  } catch (error) {
    console.log(error);

    //  验证失败会有异常
    const err = new Error(UNAUTHORIZATION);
    ctx.app.emit("error", err, ctx);
  }
};
//  仅仅校验是不是本人操作  id必须从params中取 维护restful API
const verifyPermission = (tableName) => async (ctx, next) => {
  const { id } = ctx.params;
  const userId = ctx.userId;
  const result = await authService.checkResource(tableName, id, userId);
  if (!result) {
    const error = new Error(UNPERMISSION);
    ctx.app.emit("error", error, ctx);
  } else {
    await next();
  }
};

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission,
};
