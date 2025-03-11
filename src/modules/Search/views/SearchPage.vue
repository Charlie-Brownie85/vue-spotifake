<script setup lang="ts">
import {
  ref,
  computed,
  reactive,
  watch,
} from 'vue';
import type { ComputedRef } from 'vue';

import { storeToRefs } from 'pinia';

import { useRouter, useRoute } from 'vue-router';

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

const router = useRouter();
const route = useRoute();

const { PREVIEW_MAX_RESULTS } = DEFAULT_SEARCH_CONFIG;

const searchTerm = ref(route.query.q as string || '');
const isSearching = ref(false);

const searchStore = useSearchStore();
const { search, clearSearch } = searchStore;
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

async function performSearch(term: string) {
  if (!term?.length) return;

  isSearching.value = true;
  try {
    await search(term);
  } catch (error) {
    router.push({ name: 'error', params: { errorCode: 'SEARCH_ERROR' } });
  } finally {
    isSearching.value = false;
  }
}

function seeMoreResults(category: Category) {
  router.push({ name: 'results', params: { category } });
}

watchDebounced(
  searchTerm,
  (newSearchTerm) => {
    if (!newSearchTerm.length) {
      clearSearch();
    }
    isSearching.value = !!newSearchTerm?.length;
    router.push({ query: newSearchTerm?.length ? { q: newSearchTerm } : {} });
  },
  { debounce: 150 },
);

watch(
  () => route.query.q as string,
  (newSearchTerm) => {
    performSearch(newSearchTerm);
  },
  { immediate: true },
);

</script>

<template>
  <div class="py-3 px-6 md:px-20">
    <div class="flex justify-center">
      <SearchBox v-model="searchTerm" />
    </div>
    <div
      v-if="!searchTerm.length"
      class="mt-20"
    >
      <p class="text-center text-2xl font-bold text-base-800 dark:text-base-100">
        {{ $t(EMPTY_SEARCH_MESSAGE) }}
      </p>
    </div>
    <div v-else>
      <div
        v-if="isSearching"
        class="mt-6"
      >
        <SkeletonResults />
        <SkeletonResults />
        <SkeletonResults />
      </div>
      <div v-else>
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
            :key="subResults.value.items[0]?.type"
            :results="subResults.value"
            :max-results="PREVIEW_MAX_RESULTS"
            @see-more="seeMoreResults"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
