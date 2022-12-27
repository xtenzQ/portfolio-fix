const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/app.scss";`,
      },
    },
  },
});
