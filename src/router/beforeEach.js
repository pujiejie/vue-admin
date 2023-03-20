import router from './index'
import nProgress from 'nprogress';
import store from '@/store';

router.beforeEach(async (to, from, next) => {
    nProgress.start();
    let token = getToken();
    if (!token) {
        if (to.path == '/login') {
            next();
        } else {
            next('/login');
        }
    } else {
        // 看看token是不是真的
        if (store.state.userInfo.username.length == 0) {
            try {
                const result = await store.dispatch('getUserInfo');
                if (to.path == '/login') {
                    next('/')
                } else {
                    next();
                }
            } catch (e) {
                localStorage.removeItem('token');
                store.commit('writeToken', "");
                if (to.path == '/login') {
                    next();
                } else {
                    next('/login');
                }
            }
        } else {
            if (to.path == '/login') {
                next('/');
            } else {
                next();
            }
        }
    }
    nProgress.done();
})

function getToken() {
    let token = store.state.token;
    if (!token) {
        token = localStorage.getItem('token');
        if (token) {
            store.commit('writeToken', token);
        }
    }
    return token;
}

router.afterEach((to, from) => {
    nProgress.done();
})
