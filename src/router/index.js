import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import { createRouter, createWebHistory } from 'vue-router';


// Vue.use(VueRouter)
// 1. 定义路由组件.
// 2. 定义一些路由,将组件与路由进行映射
// 3. 创建路由实例并传递 `routes` 配置
const routes = [
    { 
        path: '/', 
        component:Main,
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User },
    ],
    }
]

// 4. 创建并挂载跟实


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router