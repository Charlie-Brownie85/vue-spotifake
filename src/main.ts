import { createApp } from 'vue';

import App from './App.vue'
import store from '@/stores';
import i18n from '@/i18n';
// import router from './router';

import '@/css/main.css';

const app = createApp(App)
  .use(i18n)
  .use(store);
  // .use(router);

app.mount('#app');
