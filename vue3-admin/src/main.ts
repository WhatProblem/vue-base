import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // global css

// svg图标异常
// import './icons' // icon
import './permission' // permission control

const app = createApp(App)

if (process.env.NODE_ENV === 'development') {
    const { mockXHR } = require('../mock')
    mockXHR()
  }

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount("#app");
