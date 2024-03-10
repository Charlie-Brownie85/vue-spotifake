<script setup lang="ts">
import { ref, computed } from 'vue';

import { useInfiniteScroll } from '@vueuse/core';

import type {
  Album,
  Artist,
  Track,
  Category,
} from '@/declarations/spoti.types';

const props = withDefaults(
  defineProps<{
  results: Array<Album | Artist | Track>,
  enableInfiniteScroll?: boolean,
  loadMoreDataFunction?:(type: Category) => void,
  seeMore?: boolean,
}>(),
  {
    loadMoreDataFunction: () => {},
    useInfiniteScroll: false,
    seeMore: false,
  },
);

const emit = defineEmits<{
  'see-more': [type: Category],
}>();

const list = ref<HTMLElement | null>(null);

const type = computed(() => props.results[0]?.type);
const typeTitle = computed(() => {
  const title = `${type.value === 'track' ? 'song' : type.value}s`;
  return title[0].toUpperCase() + title.slice(1);
});

useInfiniteScroll(
  list,
  async () => {
    if (!props.enableInfiniteScroll) return;
    await props.loadMoreDataFunction(type.value);
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
        v-if="seeMore"
        class="text-right cursor-pointer text-base-600 dark:text-base-500 hover:underline dark:hover:text-base-100"
        @click="emit('see-more', type)"
      >
        {{ $t('See more') }}
      </span>
    </div>
    <ul
      ref="list"
      class="results-list"
      :class="{ 'h-[80vh] overflow-y-auto': props.enableInfiniteScroll }"
    >
      <li
        v-for="item in props.results"
        :key="item.id"
      >
        <SpotiCard :item="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.results-list {
  @apply grid gap-3;
  grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));
}
</style>
