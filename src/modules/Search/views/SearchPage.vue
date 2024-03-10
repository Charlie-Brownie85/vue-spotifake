<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useRouter } from 'vue-router';

import { watchDebounced } from '@vueuse/core';

import { useSearchStore } from '@/modules/Search/store';

import type { Category } from '@/declarations/spoti.types';

import {
  MAXRESULTS,
  NO_RESULTS_MESSAGE,
  EMPTY_SEARCH_MESSAGE,
} from '@/config/search.config';

import { initAuth } from '@/composables/useAuth';

const router = useRouter();

const searchTerm = ref('');

const searchStore = useSearchStore();
const { search, clearSerch } = searchStore;
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

function seeMoreResults(category: Category) {
  router.push({ name: 'results', params: { category } });
}

watchDebounced(
  searchTerm,
  async (newSearchTerm) => {
    if (!newSearchTerm.length) {
      clearSerch();
      return;
    }
    await search(newSearchTerm);
  },
  { debounce: 200 },
);

await initAuth();
</script>

<template>
  <div class="p-3">
    <div class="flex justify-center">
      <SearchBox v-model="searchTerm" />
    </div>
    <div
      v-if="noResults"
      class="mt-20"
    >
      <p class="text-center text-2xl font-bold text-base-800 dark:text-base-100">
        {{ searchTerm.length ? $t(NO_RESULTS_MESSAGE) : $t(EMPTY_SEARCH_MESSAGE) }}
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
        @see-more="seeMoreResults"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
