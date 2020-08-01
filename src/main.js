import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store";
import router from "./router/router";
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
