import VueRouter from "vue-router";
import Vue from "vue";

import Page404 from "../page/404";
import Page500 from "../page/500";
import Login from "../page/login/login";
import Home from "../page/home/home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login', name:"login" ,component: Login
    },
    {
        path: '/home', name:"home" ,component: Home
    },
    {
        path: '/404', name:"404" ,component: Page404
    },
    {
        path: '/500', name:"500", component: Page500
    },
    {
        path: '*', redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes
})

export default router
