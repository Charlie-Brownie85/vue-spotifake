<script setup lang="ts">
import { ref, computed } from 'vue';

import { watchDebounced } from '@vueuse/core';

import { useSearchStore } from '@/modules/Search/store';

import { MAXRESULTS, NO_RESULTS_MESSAGE } from '@/config/search.config';

// ! remove after testing
import {
  trackResults,
  artistResults,
  albumResults,
} from '@/__mocks__/search-results.js';

import { initAuth } from '@/composables/useAuth';

const searchTerm = ref('');

const { search } = useSearchStore();

// ! HARDCODED FOR TESTING
const artists = artistResults.artists.items.slice(0, 2);
const tracks = trackResults.tracks.items.slice(0, 10);
const albums = albumResults.albums.items.slice(0, 5);

const results = [artists, tracks, albums];

const noResults = computed(() => !results.length);

watchDebounced(
  searchTerm,
  async (newSearchTerm) => {
    await search(newSearchTerm);
  },
  { debounce: 200 },
);

await initAuth();
</script>

<template>
  <div class="p-3">
    <SearchBox v-model="searchTerm" />
    <div
      v-if="noResults"
      class="mt-20"
    >
      <p class="text-center text-2xl font-bold text-base-800 dark:text-base-100">
        {{ $t(NO_RESULTS_MESSAGE) }}
      </p>
    </div>
    <div
      v-else
      class="mt-6"
    >
      <ResultsPanel
        v-for="subResults in results"
        :key="subResults[0].type"
        :results="subResults.slice(0, MAXRESULTS)"
        :see-more="subResults.length > MAXRESULTS"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
