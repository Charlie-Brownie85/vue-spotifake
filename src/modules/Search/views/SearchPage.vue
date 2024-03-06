<script setup lang="ts">
import { ref } from 'vue';

// ! remove after testing
import {
  // trackResults,
  artistResults,
  // albumResults,
} from '@/__mocks__/search-results';

import { initAuth } from '@/composables/useAuth';

const searchTerm = ref('');

// ! HARDCODED FOR TESTING
const artistInfo = ref(artistResults.artists.items[0]);
// const tracktInfo = ref(trackResults.tracks.items[0]);
// const albumtInfo = ref(albumResults.albums.items[0]);

await initAuth();
</script>

<template>
  <div>
    <h1 class="text-2xl text-base-900 font-bold">
      Welcome to search view!
    </h1>
  </div>
  <SearchBox v-model="searchTerm" />
  <br>
  <SpotiCard :item="artistInfo" />
</template>

<style lang="postcss" scoped>

</style>
