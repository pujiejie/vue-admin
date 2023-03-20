import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: () => import("@/views/Login/index")
    },
    {
        path: '/',
        component: () => import("@/Layout/index"),
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import("@/views/Dashboard/index")
            }
        ]
    },
    {
        path: '/device',
        component: () => import("@/Layout/index"),
        redirect: '/device/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/Device/index")
            }
        ]
    }
]

export default new VueRouter({
    mode: 'hash',
    routes
})
