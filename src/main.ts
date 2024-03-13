import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import { validateAccess } from '@/router/routerGuard';

import store from '@/stores';
import i18n from '@/i18n';
import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';

import '@/css/main.css';

//* Router
router.beforeEach(validateAccess);

const app = createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .component('SVGIcon', SVGIcon);

//* Mount app when router isReady
router.isReady().then(() => app.mount('#app'));
