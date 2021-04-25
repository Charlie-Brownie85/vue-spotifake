<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <spotify-button @click.native="requestAuth">Start!</spotify-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SpotifyButton from "./SpotifyButton";

export default {
  name: "HelloWorld",
  components: {
    SpotifyButton,
  },
  props: {
    msg: {
      type: String,
      default: 'Welcome to My Spotify Search App'
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
  margin-bottom: 20px;
}
</style>
