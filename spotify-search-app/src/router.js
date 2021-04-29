import VueRouter from 'vue-router';
import store from './store/store';
import Login from './components/Login.vue';
import SearchPanel from './components/SearchPanel.vue';
import RedirectPage from './components/RedirectPage.vue';
import MoreResultsPage from './components/MoreResultsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: RedirectPage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPanel,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/results/:type',
    name: 'results',
    component: MoreResultsPage,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next({name: 'login'});
  } else {
    next();
  }
});

export default router;