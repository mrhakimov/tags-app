import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";
import TikTok from "../components/TikTok";
import Instagram from "../components/Instagram";



Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/instagram',
      name: 'instagram',
      component: Instagram,
    },
    {
      path: '/tik_tok',
      name: 'tik_tok',
      component: TikTok,
    },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '*',
      redirect: '/',
    },

  ]
});


export default router;
