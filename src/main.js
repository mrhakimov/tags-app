import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store";
import router from "./router/router";
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
