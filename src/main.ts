import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ZsChart from "@/components/ZsChart/index";

const app = createApp(App)
//全局引入
// app.use(ZsChart)
app.mount('#app')
