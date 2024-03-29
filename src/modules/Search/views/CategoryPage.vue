<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useRouter } from 'vue-router';

import type {
  Album,
  Artist,
  Track,
  Category,
  CategoryResults,
} from '@/declarations/spoti.types';

import { useSearchStore } from '@/modules/Search/store';

const props = defineProps<{
  category: Category,
}>();

const router = useRouter();

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
  try {
    await searchNextPage(type);
  } catch (error) {
    router.push({ name: 'error', params: { errorCode: 'SEARCH_ERROR' } });
  }
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
      :key="(results as CategoryResults<Album | Artist | Track>)?.items[0]?.type"
      :results="(results as CategoryResults<Album | Artist | Track>)"
      enable-infinite-scroll
      :load-more-data-function="searchMore"
      class="mt-6"
    />
  </div>
</template>

<style lang="postcss" scoped>
</style>
