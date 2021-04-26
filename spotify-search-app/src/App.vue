<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from './router';
import { setAuthHeader } from './utils/functions';

export default {
  name: 'App',
  created: function () {
    this.$http.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response.status === 401) {
        console.log('Token expired!');
        this.logout();
        router.push({ name: 'login' });
        throw error;
      } else {
        return Promise.reject(error);
      }
    });
  },
  mounted: function () {
    if (this.$store.getters.isAuthenticated) {
      setAuthHeader(this.$http, this.$store.getters.token);
    } else {
      this.logout();
    }
  },
  methods: {
    ...mapActions(['logout']),
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-white;
}
</style>
