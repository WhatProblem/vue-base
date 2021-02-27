# vue-rem

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

### 移动端rem适配

1. 安装插件
- [x] amfe-flexible
- [x] postcss-pxtorem

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
	"iOS >= 7"
]
```
```js
// vue.config.js
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
```
