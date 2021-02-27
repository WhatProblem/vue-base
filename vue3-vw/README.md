### vue3 + viewport 移动端项目配置

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 移动端vw适配
1. 插件系列
- [x] vue3
- [x] vuex4
- [x] vue-router4
- [x] postcss-px-to-viewport

2. 配置项
```json
// package.json
"postcss": {
"plugins": {
    "autoprefixer": {}
	}
},
"browserslist": [
	"Android >= 4.0",
	"iOS >= 7",
	"> 1%",
	"last 2 versions",
	"not dead"
],
```
```js
// vue.config.js
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
```