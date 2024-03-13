import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Search',
    path: '/search',
    children: [
      {
        path: '',
        name: 'search',
        meta: {
          name: 'search',
          requiresAuth: true,
        },
        components: {
          // ? header?
          // header: () => import(
          //   '@/components/Header.vue'
          // ),
          default: () => import(
            '@/modules/Search/views/SearchPage.vue',
          ),
        },
      },
    ],
  },
  {
    name: 'results',
    path: '/results/:category',
    meta: {
      name: 'results',
      requiresAuth: true,
    },
    components: {
      default: () => import(
        '@/modules/Search/views/CategoryPage.vue',
      ),
    },
    props: true,
  },
];

export default routes;
