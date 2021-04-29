<template>
  <div id="app">
    <header class="header">
      <router-link :to="{ path: '/' }">
        <div class="header__logo">
          <img src="./assets/img/icons/app-logo.svg" alt="app logo" />
        </div>
      </router-link>
      <h1 class="header__title">
        <router-link :to="{ path: '/' }">Spotifake</router-link>
      </h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import router from './router';
  import { setAuthHeader } from './utils/functions';

  export default {
    name: 'App',
    created: function () {
      this.$http.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            console.log('Token expired!');
            this.logout();
            router.push({ name: 'login' });
            throw error;
          } else {
            return Promise.reject(error);
          }
        }
      );
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
  };
</script>

<style lang="scss" scoped>
  #app {
    font-family: $font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-white;

    display: grid;
    grid-template-rows: var(--header-height) auto;
  }

  .header {
    background-color: $color-spotify-black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: var(--base-lateral-padding);

    &__logo {
      display: flex;
      height: 100%;
      width: var(--header-height);
      align-items: center;
      justify-content: center;
    }

    &__title {
      margin-bottom: 0;
      text-align: center;
      width: calc(100% - var(--header-height));
      margin-right: var(--header-height);

      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
