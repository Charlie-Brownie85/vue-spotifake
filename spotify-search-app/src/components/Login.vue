<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <img class="app-logo" alt="App logo" src="../assets/img/login.svg" />
    <p>Welcome! In order to use this app you need to authorize it by clicking the button below.</p>
    <p>You'll be redirected to Spotify Account services for login in</p>
    <spotify-button @click.native="requestAuth">Login!</spotify-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SpotifyButton from "./SpotifyButton";

export default {
  name: "Login",
  components: {
    SpotifyButton,
  },
  props: {
    msg: {
      type: String,
      default: 'My Spotify Search App'
    },
  },
  methods: {
    ...mapActions(['requestAuth'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>
