import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js'
import './styles/index.css'

createApp(App)
.use(Router)
.mount('#app')
