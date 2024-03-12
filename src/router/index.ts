import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import SearchModuleRoutes from '@/modules/Search/routes';
import ItemDetailsModuleRoutes from '@/modules/ItemDetails/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/search',
  },
  ...SearchModuleRoutes,
  ...ItemDetailsModuleRoutes,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});
