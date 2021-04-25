<template>
  <div class="redirect_page">
    <h1>You will be redirected soon</h1>
    <div v-if="errorMessage">
      <p>Ups! Something went wrong...</p>
      <p class="error">{{ errorMessage }}</p>
      <p>Try to login again</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../router";

export default {
  computed: {
    errorMessage() {
      return this.$route.query.error || ''
    },
  },
  methods: {
    ...mapActions(["manageSuccessfulAuth", "manageFailedAuth"]),
  },
  mounted: async function () {
    const route = this.$route;
    console.log("You reached the redirectPage");
    console.log(route);

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