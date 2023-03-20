import Vue from 'vue';
import VueX from 'vuex';
import { getUserInfo as userInfo } from '@/api/user';

Vue.use(VueX);

export default new VueX.Store({
    state: {
        token: '',
        isCollapse: false,
        userInfo: {
            id: '',
            username: ""
        }
    },
    mutations: {
        writeToken(state, token) {
            state.token = token;
        },
        changeIsCollapse(state) {
            state.isCollapse = !state.isCollapse;
        },
        saveUserInfo(state, payload) {
            state.userInfo = { ...payload };
        }
    },
    actions: {
        getUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                userInfo(state.token).then(res => {
                    if (res.data.code == 0) {
                        resolve();
                        commit('saveUserInfo', res.data);
                    } else {
                        reject(res.data);
                    }
                }).catch((error) => {
                    reject('error');
                })
            })
        }
    }
})