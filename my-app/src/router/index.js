import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/main-page.vue';
import Succes from '../views/succes-page.vue';
const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/succes',
    component: Succes,
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
