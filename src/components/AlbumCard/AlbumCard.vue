<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import type { AlbumDetails } from '@/declarations/spoti.types';

import { useDetailsStore } from '@/modules/ItemDetails/store';

import { getSongDuration } from '@/utils';

const props = defineProps<{
  id: string,
}>();

const { fetchAlbum } = useDetailsStore();

async function fetchAlbumDetails() {
  return fetchAlbum(props.id);
}

const album: Ref<AlbumDetails> = ref(await fetchAlbumDetails());
</script>

<template>
  <div class="album-card">
    <div
      class="w-full h-full overflow-hidden flex justify-center p-2"
    >
      <img
        :src="album?.images[1]?.url"
        alt="album picture"
        class="block h-full object-cover rounded-md"
      >
    </div>
    <div class="flex flex-col justify-start items-center py-[0.625rem] px-5 overflow-hidden mb-5">
      <h2>
        <span class="font-bold text-2xl mb-1 font-body text-base-900 dark:text-base-200">
          {{ album?.name + ' · ' }}
        </span>
        <span class="font-light text-xl text-base-700 dark:text-base-500">{{
          new Date(album?.release_date).getFullYear()
        }}</span>
      </h2>
      <span class="font-bold text-lg text-base-700 dark:text-base-500 mb-1">{{ album?.artists[0]?.name }}</span>
    </div>
    <div class="flex justify-center">
      <ul class="px-8 w-full max-w-[50rem]">
        <li
          v-for="track in album?.tracks.items"
          :key="track.id"
          class="track"
        >
          <span class="font-light text-right text-md text-base-700 dark:text-base-500">{{ track.track_number }}</span>
          <span class="font-bold text-md text-base-900 dark:text-base-200 mb-1">{{ track.name }}</span>
          <span class="font-light text-right text-sm text-base-900 dark:text-base-400">{{ getSongDuration(track.duration_ms) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.track {
  @apply grid gap-4 py-1;
  grid-template-columns: 30px 1fr 10%;
}
</style>
