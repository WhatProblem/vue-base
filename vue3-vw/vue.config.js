const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
	outputDir: 'dist',
	publicPath: process.env.NODE_ENV === 'production' ? '/my-pro' : '/',
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					pxtoviewport({
						viewportWidth: 750 // 设计稿宽度
					})
				]
			}
		}
	}
}