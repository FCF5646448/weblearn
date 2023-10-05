import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

// 将 axios 挂载到全局
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router),
app.mount('#app')