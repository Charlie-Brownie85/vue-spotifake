<script setup lang="ts">
import { ref, computed } from 'vue';

import { useInfiniteScroll } from '@vueuse/core';

import type {
  Album,
  Artist,
  Track,
  Category,
  CategoryResults,
} from '@/declarations/spoti.types';

const props = withDefaults(
  defineProps<{
  results: CategoryResults<Album | Artist | Track>,
  enableInfiniteScroll?: boolean,
  loadMoreDataFunction?:(type: Category) => void,
  maxResults?: number | null,
}>(),
  {
    loadMoreDataFunction: () => {},
    enableInfiniteScroll: false,
    maxResults: null,
  },
);

const emit = defineEmits<{
  'see-more': [type: Category],
}>();

const list = ref<HTMLElement | null>(null);

const loadingMore = ref(false);

const resultsItems = computed(() => {
  if (!props.results?.items.length) return [];
  if (props.maxResults === null) return props.results?.items || [];
  return props.results?.items.slice(0, props.maxResults);
});

const displaySeeMore = computed(() => {
  if (props.maxResults === null) return false;
  return props.results.items?.length > props.maxResults;
});

const type = computed(() => resultsItems.value[0]?.type);
const typeTitle = computed(() => {
  const title = `${type.value === 'track' ? 'song' : type.value}s`;
  return title[0].toUpperCase() + title.slice(1);
});

const areThereMoreResults = computed(() => !!props.results?.next);

useInfiniteScroll(
  list,
  async () => {
    if (!props.enableInfiniteScroll || !areThereMoreResults.value) return;
    loadingMore.value = true;
    await props.loadMoreDataFunction(type.value);
    loadingMore.value = false;
  },
  { distance: 100 },
);
</script>

<template>
  <div class="mb-6">
    <div class="flex justify-between mb-2">
      <h3 class="text-base-700 dark:text-base-100 font-bold text-lg text-left">
        {{ typeTitle }}
      </h3>
      <span
        v-if="displaySeeMore"
        class="text-right cursor-pointer text-base-600 dark:text-base-500 hover:underline dark:hover:text-base-100"
        @click="emit('see-more', type)"
      >
        {{ $t('See more') }}
      </span>
    </div>
    <ul
      ref="list"
      class="results-list"
      :class="{ 'h-[80vh] overflow-y-auto infinite': props.enableInfiniteScroll }"
      data-testid="results-list"
    >
      <li
        v-for="item in resultsItems"
        :key="item.id"
      >
        <SpotiCard :item="item" />
      </li>
      <div
        v-if="loadingMore"
        class="flex justify-center items-center mt-6"
      >
        <span class="block loader" />
      </div>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.results-list {
  @apply grid gap-3;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

&:not(.infinite) {
  grid-auto-flow: column;
  overflow-x: hidden;

  li:nth-of-type(n + 4) {
    display: none;
  }
}
}

@media screen(lg) {
  .results-list {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));

    &:not(.infinite) li:nth-of-type(n + 4) {
      display: block;
    }
  }
}
</style>
