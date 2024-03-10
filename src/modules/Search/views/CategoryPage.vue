<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import type { Category } from '@/declarations/spoti.types';

import { useSearchStore } from '@/modules/Search/store';

const props = defineProps<{
  category: Category,
}>();

const searchStore = useSearchStore();
const { searchNextPage } = searchStore;

const {
  artistsResults,
  tracksResults,
  albumsResults,
  lastSearchTerm,
} = storeToRefs(searchStore);

const resultsDictionary = {
  artist: artistsResults,
  track: tracksResults,
  album: albumsResults,
};

const results = computed(() => resultsDictionary[props.category].value);

async function searchMore(type: Category) {
  await searchNextPage(type);
}

</script>

<template>
  <div class="p-3">
    <div
      class="flex gap-6"
    >
      <button
        type="button"
        class="back-button"
        @click="$router.back()"
      >
        <SVGIcon
          name="arrow"
          color="white"
          class="w-4 h-4 rotate-180"
        />
      </button>
      <h2 class="text-base-700 dark:text-base-100 font-bold text-xl text-left">
        {{ $t('Displaying results for: {searchTerm}', { searchTerm: lastSearchTerm }) }}
      </h2>
    </div>
    <ResultsPanel
      :key="results[0]?.type"
      :results="results"
      enable-infinite-scroll
      :load-more-data-function="searchMore"
      class="mt-6"
    />
  </div>
</template>

<style lang="postcss" scoped>
.back-button {
  @apply cursor-pointer bg-base-400 hover:bg-base-500 dark:bg-base-800 dark:hover:bg-base-700;
  @apply flex justify-center items-center p-2 rounded-full min-w-8 min-h-8;
  transition: background-color 0.3s ease;
}
</style>
