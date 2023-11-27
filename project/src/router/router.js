import { createRouter,createWebHistory } from "vue-router";
import home from "../Pages/home.vue";
const router=createRouter({
    routes:[
        {
            name:'首页',
            path:'/',
            component:home
        },
        {
            name:'清华新闻',
            path:'/news',
            component:() => import('../Pages/news.vue')
        },
        {
            name:'学校概况',
            path:'/summery',
            component:()=>import('../Pages/summery.vue')
        },
        {
            name:'走进校园',
            path:'/walk',
            component:()=>import('../Pages/walkinto.vue')
        }
    ],
    history:createWebHistory()
})
export default router
