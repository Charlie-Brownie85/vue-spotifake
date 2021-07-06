import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import './assets/styles/scss/main.scss'

Vue.prototype.$http = axios.create();
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
