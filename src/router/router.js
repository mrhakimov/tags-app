import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";



Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: Main,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});


export default router;
