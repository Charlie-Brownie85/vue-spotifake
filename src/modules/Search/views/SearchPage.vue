<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import type { ComputedRef } from 'vue';

import { storeToRefs } from 'pinia';

import { useRouter } from 'vue-router';

import { watchDebounced } from '@vueuse/core';

import { useSearchStore } from '@/modules/Search/store';

import type {
  Album,
  Artist,
  Track,
  Category,
  CategoryResults,
} from '@/declarations/spoti.types';

import {
  DEFAULT_SEARCH_CONFIG,
  NO_RESULTS_MESSAGE,
  EMPTY_SEARCH_MESSAGE,
} from '@/config/search.config';

import { initAuth } from '@/composables/useAuth';

const router = useRouter();

const { PREVIEW_MAX_RESULTS } = DEFAULT_SEARCH_CONFIG;

const searchTerm = ref('');

const searchStore = useSearchStore();
const { search, clearSerch } = searchStore;
const {
  artistsResults,
  tracksResults,
  albumsResults,
} = storeToRefs(searchStore);

const results = reactive([
  artistsResults as ComputedRef<CategoryResults<Artist>>,
  tracksResults as ComputedRef<CategoryResults<Track>>,
  albumsResults as ComputedRef<CategoryResults<Album>>,
]);

const noResults = computed(
  () => results.every((subResults) => !subResults.value?.items?.length),
);

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
        :key="subResults.value.items[0]?.type"
        :results="subResults.value"
        :max-results="PREVIEW_MAX_RESULTS"
        @see-more="seeMoreResults"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
