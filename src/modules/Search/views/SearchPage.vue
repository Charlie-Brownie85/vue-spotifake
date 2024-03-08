<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import { watchDebounced } from '@vueuse/core';

import { useSearchStore } from '@/modules/Search/store';

import { MAXRESULTS, NO_RESULTS_MESSAGE } from '@/config/search.config';

import { initAuth } from '@/composables/useAuth';

const searchTerm = ref('');

const searchStore = useSearchStore();
const { search } = searchStore;
const {
  artistsResults,
  tracksResults,
  albumsResults,

} = storeToRefs(searchStore);

const results = computed(() => [
  artistsResults.value,
  tracksResults.value,
  albumsResults.value,
]);

const noResults = computed(() => results.value.every((subResults) => !subResults.length));

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
        :key="subResults[0]?.type"
        :results="subResults?.slice(0, MAXRESULTS)"
        :see-more="subResults?.length > MAXRESULTS"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
