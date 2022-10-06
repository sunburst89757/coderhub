const fs = require("fs");
//  动态加载每一个路由文件
const useRoutes = (app) => {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    if (file === "index.js") return;
    const router = require(`./${file}`);
    app.use(router.routes());
    app.use(router.allowedMethods());
  });
};

module.exports = useRoutes;
