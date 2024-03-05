import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import SearchModuleRoutes from '@/modules/Search/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/search',
  },
  ...SearchModuleRoutes,
  {
    path: '/error/:errorCode?',
    name: 'Error',
    component: () => import(
      '@/pages/ErrorView.vue'
    ),
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
