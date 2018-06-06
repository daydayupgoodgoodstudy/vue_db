import Vue from 'vue';
import Router from 'vue-router';
import { _cookie,_localStorage } from '@/utils/cookie';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: "home",
        redirect: "/home/user",
        component: () => import('@/page/home'),
        children: [
            {
                path: "user",
                component: () => import('@/page/user')
            },
            {
                path: "message",
                component: () => import('@/page/message')
            },
            {
                path: "carousel",
                component: () => import('@/page/carousel')
            },
            {
                path: "convertibility",
                component: () => import('@/page/convertibility')
            },
            {
                path: "dataserver",
                component: () => import('@/page/dataserver')
            },
            {
                path: "changepwd",
                component: () => import('@/page/changepwd')
            },
        ]
    },
    {
        name: 'login',
        path: '',
        component: () => import('@/page/login'),
        meta: {
            title: '登录页面'
        }
    }
]

routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

//除了 /  /login 所有路由请求都会判断是否有t 清除 localStorage 没有跳转/
router.beforeEach((to, from, next) => {
    if(['/', '/login'].includes(to.path)){
        _cookie.delCookie('t');
        _localStorage.clearLocalStorage();
        return next()
    }else{
        if( _cookie.getCookie('t')){
            return  next();
        }else{
            _cookie.delCookie('t');
            _localStorage.clearLocalStorage();
            return next('/');
        }
    }   
})

export {
    router
};
