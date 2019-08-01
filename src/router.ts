import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import VueInfo from '@/components/vue-template/VueInfo.vue';

Vue.use(Router);

// @see https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: 'vue',
      name: 'vue',
      component: VueInfo,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
