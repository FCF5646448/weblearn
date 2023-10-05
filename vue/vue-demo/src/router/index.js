import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "../components/home.vue"

// 配置信息中需要页面的相关配置
// 具体页面
const routes = [
    {
        path: "/",
        component: HomeView
    },
    {
        path: "/about",
        name: "about",
        redirect: "about/us",
        component: () => import("../components/about.vue"),
        children: [
            {
                // 二级导航的路径不要加/
                path: "us",
                component: () => import("../components/aboutUs.vue")
            },
            {
                path: "info",
                component: () => import("../components/aboutInfo.vue")
            },
        ]
    },
    {
        path: "/news",
        name: "news",
        // 异步加载方式，组件引入是懒加载的方式
        component: () => import("../components/news.vue")
    },
    {
        path: "/newsDetails/:name",
        name: "newsDetails",
        component: () => import("../components/newsDetail.vue")
    }
]

// 创建路由
const router = createRouter({
    /*
    * createWebHashHistory: 原理使用了a标签锚点连接
    * createWebHistory: 原理使用了h5的pushState()
    * 没有hash的方式，直接显示路径，但是需要后台做重定向，否则会出现404问题。
    */
    history: createWebHashHistory(),
    routes
})

// 全局导出
export default router