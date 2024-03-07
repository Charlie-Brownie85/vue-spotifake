import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import store from '@/stores';
import i18n from '@/i18n';
import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';

import '@/css/main.css';

const app = createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .component('SVGIcon', SVGIcon);

app.mount('#app');

//* Mount app when router isReady
// router.isReady().then(() => app.mount('#app'));
