import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'ItemDetails',
    path: '/:type/:id',
    meta: { name: 'ItemDetails' },
    components: {
      default: () => import(
        '@/modules/ItemDetails/views/ItemDetailsPage.vue',
      ),
    },
    props: true,
  },
];

export default routes;
