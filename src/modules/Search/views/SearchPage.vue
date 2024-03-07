<script setup lang="ts">
import { ref } from 'vue';

// ! remove after testing
import {
  trackResults,
  artistResults,
  albumResults,
} from '@/__mocks__/search-results';

import { initAuth } from '@/composables/useAuth';

const searchTerm = ref('');

// ! HARDCODED FOR TESTING
// const results = ref(artistResults.artists.items.slice(0, 3));
// const results = ref(trackResults.tracks.items.slice(0, 3));
const results = ref(albumResults.albums.items.slice(0, 3));

await initAuth();
</script>

<template>
  <div class="p-3">
    <h1 class="text-2xl text-base-900 font-bold">
      Welcome to search view!
    </h1>
  </div>
  <div class="p-3">
    <SearchBox v-model="searchTerm" />
    <br>
    <ResultsPanel
      :results="results"
      see-more
    />
  </div>
</template>

<style lang="postcss" scoped>

</style>
