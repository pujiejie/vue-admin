import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import "@/router/beforeEach"
import 'nprogress/nprogress.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css';

import eventBus from '@/tools/eventBus';

Vue.use(ElementUI);


import store from '@/store'

Vue.config.productionTip = false;
Vue.prototype.$event = eventBus;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
