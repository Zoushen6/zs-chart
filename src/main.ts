import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ZsChart from "@/components/ZsChart/index";

const app = createApp(App)
app.use(ZsChart)
app.mount('#app')
