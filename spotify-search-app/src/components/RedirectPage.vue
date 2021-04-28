<template>
  <div class="redirect_page">
    <div class="container">
      <h2>😰 Oops! Something went wrong...</h2>
      <p v-if="errorMessage" class="error">Error: {{ errorMessage }}</p>
      <p>You will be redirected soon</p>
      <p>Try to login again</p>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import router from '../router';

  export default {
    computed: {
      errorMessage() {
        return this.$route.query.error || '';
      },
    },
    methods: {
      ...mapActions(['manageSuccessfulAuth', 'manageFailedAuth']),
    },
    mounted: async function () {
      const route = this.$route;

      if (route.hash) {
        await this.manageSuccessfulAuth(route.hash);
        router.push({ path: '/search' });
      } else {
        this.manageFailedAuth();
        setTimeout( () => {
          router.push({ name: 'login' });
        }, 2500);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - var(--header-height));
        flex-direction: column;
    margin: 0 auto;
  }

  p {
    font-size: 32px;
    color: $color-white;
    margin-bottom: 1em;
  }

  .error {
    color: $color-error-red;
    font-size: 20px;
    font-weight: 300;
  }
</style>