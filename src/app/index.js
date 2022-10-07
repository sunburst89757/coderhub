const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const useRoutes = require("../router");
// const userRouter = require("../router/user.router");
// const authRouter = require("../router/auth.router");
const handleError = require("./errorHandle");

const app = new Koa();
app.use(bodyParser());
useRoutes(app);
app.on("error", handleError);
module.exports = app;
