const {
  USERNAME_OR_PASSWORD_IS_NOT_EMPTY,
  USERNAME_ALREADY_EXISTS,
} = require("../constants/errorTypes");
const errorHandle = (error, ctx) => {
  let status;
  let message;
  switch (error.message) {
    case USERNAME_OR_PASSWORD_IS_NOT_EMPTY: {
      //  bad request
      status = 400;
      message = "密码或者用户名为空";
      break;
    }
    case USERNAME_ALREADY_EXISTS: {
      //   接口冲突
      status = 409;
      message = "该用户名已经被占用了，请更换一个";
      break;
    }
    default: {
      status = 404;
      message = "Not Found";
    }
  }

  ctx.body = message;
  ctx.status = status;
};
module.exports = errorHandle;