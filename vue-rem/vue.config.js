const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/my-pro/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75, // 设计稿宽度的十分之一
            propList: ['*']
          })
        ]
      }
    }
  }
};
