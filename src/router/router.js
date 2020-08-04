import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";
import TikTok from "../components/Post/TikTok";
import Instagram from "../components/Post/Instagram";
import TopTikTok from "../components/Blog/TopTikTok";
import TopInstagram from "../components/Blog/TopInstagram";
import Blogs from "../components/Blog/BlogCatalog/Blogs";
import BlogPage from "../components/Blog/BlogCatalog/BlogPage";
import Post from "../components/Post/Post";
import BlogCatalog from "../components/Blog/BlogCatalog";
import About from "../components/About/About";

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
      path: '/post',
      name: 'post',
      component: Post,
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
      path: '/top_tiktok',
      name: 'top_tik_tok',
      component: TopTikTok
    },
    {
      path: '/top_instagram',
      name: 'top_instagram',
      component: TopInstagram
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage
    },
    {
      path: '/blog_catalog',
      name: 'blogCatalog',
      component: BlogCatalog
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      redirect: '/',
    },

  ]
});


export default router;
