import Vue from 'vue';
import Router from 'vue-router';
import Settings from '@/pages/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
});