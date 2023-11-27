// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import api from './axios/api.js'
import axios from 'axios'

const app = createApp(App)
// app.provide('$axios', axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
