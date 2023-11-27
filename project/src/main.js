import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
createApp(App).use(Swipe).use(SwipeItem).use(router).mount('#app')
