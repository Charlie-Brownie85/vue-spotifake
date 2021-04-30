<template>
  <div class="container">
    <img class="login-logo" alt="login logo" src="../assets/img/icons/login.svg" />
    <div class="login-text">
      <p>
        Welcome! In order to use this app you need to authorize it by clicking
        the button below.
      </p>
      <p>You'll be redirected to Spotify Account services for login in</p>
    </div>
    <spotify-button class="login-btn" @click.native="requestAuth"
      >Login!</spotify-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SpotifyButton from "../components/SpotifyButton";

export default {
  name: "Login",
  components: {
    SpotifyButton,
  },
  methods: {
    ...mapActions(["requestAuth"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  --grid-row-scheme: 3fr 2fr 1fr;
  --grid-row-gap: 10px;
  --grid-align: end;
  
  --login-btn-justify: stretch;
  --login-btn-margin-bottom: 20px;

  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: var(--container-padding);
  display: grid;
  grid-template-rows: var(--grid-row-scheme);
  justify-items: center;
  align-items: var(--grid-align);
  row-gap: var(--grid-row-gap);

  @media only screen and (min-width: map-get($breakpoints, "sm")) {
    --login-btn-justify: auto;
    --login-btn-margin-bottom: auto;
  }

  @media only screen and (min-width: map-get($breakpoints, "lg")) {
    --grid-row-scheme: 2fr 1fr 1fr;
    --grid-row-gap: 30px;
    --grid-align: center;
  }
}

.login-logo {
  display: block;
  width: clamp(200px, 60%, 240px);
  height: auto;
  align-self: end;
}

.login-text {
  max-width: 600px;

  @media only screen and (min-width: map-get($breakpoints, 'lg')) {
    p {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }
  }
}

.login-btn {
  min-width: 200px;
  justify-self: var(--login-btn-justify);
  margin-bottom: var(--login-btn-margin-bottom);
}
</style>
