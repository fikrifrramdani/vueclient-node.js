import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      alias: '/posts',
      name: 'posts',
      component: () => import("../components/posts/Index")
    },
    {
      path: '/add',
      alias: '/posts-add',
      name: 'posts',
      component: () => import("../components/posts/Add")
    },
    {
      path: '/post/:id',
      alias: '/posts-detail',
      name: 'posts',
      component: () => import("../components/posts/Show")
    },
  ]
});
