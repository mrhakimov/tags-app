import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store";
import router from "./router/router";
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Notifications from 'vue-notification';
import Darkmode from "darkmode-js";

const options = {
  bottom: '32px', // default: '32px'
  right: '32px', // default: '32px'

  left: 'unset', // default: 'unset'
  // time: '0.5s', // default: '0.3s'
  // mixColor: '#fff', // default: '#fff'
  // backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#000',// '#100f2c',  // default: '#100f2c'
  // buttonColorLight: '#100f2c', // default: '#fff'
  // saveInCookies: false, // default: true,
  // positionFixed: true,
  label: '🌓', // default: ''

  // autoMatchOsTheme: false // default: true
}

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Darkmode(options).showWidget();
Vue.use(BootstrapVue);
Vue.use(Notifications);



new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
