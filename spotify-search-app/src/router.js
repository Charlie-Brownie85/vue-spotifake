import VueRouter from 'vue-router';
import store from './store/store';
import HelloWorld from './components/HelloWorld.vue';
import SearchPanel from './components/SearchPanel.vue';
import RedirectPage from './components/RedirectPage.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: HelloWorld
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