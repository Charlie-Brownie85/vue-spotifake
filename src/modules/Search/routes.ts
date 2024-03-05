import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
  name: 'Search',
  path: '/search',
  children: [
    {
      path: '',
      name: 'search',
      meta: { name: 'search' },
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
}];

export default routes;
