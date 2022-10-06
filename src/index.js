import Koa from "koa";
const app = new Koa();
app.listen(8080, () => {
  console.log("koa server start");
});
