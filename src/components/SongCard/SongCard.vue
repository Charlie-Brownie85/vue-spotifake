<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import { useRouter } from 'vue-router';

import type { Track } from '@/declarations/spoti.types';

import { useDetailsStore } from '@/modules/ItemDetails/store';

import { getSongDuration } from '@/utils';

const props = defineProps<{
  id: string,
}>();

const router = useRouter();

const { fetchTrack } = useDetailsStore();

async function fetchTrackDetails() {
  return fetchTrack(props.id);
}

const track: Ref<Track> = ref(await fetchTrackDetails());

function goToDetailsView(type: string, id: string) {
  router.push({
    name: 'ItemDetails',
    params: {
      type,
      id,
    },
  });
}
</script>

<template>
  <div class="track-card">
    <div
      class="w-full h-full overflow-hidden flex justify-center p-2"
    >
      <img
        :src="track?.album?.images[1]?.url"
        alt="track picture"
        class="block h-full object-cover"
      >
    </div>
    <div class="flex justify-center">
      <div class="w-full max-w-[21.875rem] flex flex-col justify-start items-center py-[0.625rem] px-5 overflow-hidden mb-5">
        <h2 class="w-full flex justify-between items-baseline">
          <span class="font-bold text-2xl mb-1 font-body text-base-900 dark:text-base-200">
            {{ track?.name }}
          </span>
          <span class="font-thin text-lg mb-1 font-body text-base-800 dark:text-base-500">
            {{ getSongDuration(track?.duration_ms) }}
          </span>
        </h2>
        <span
          class="block w-full font-bold text-lg text-base-900 dark:text-base-200 cursor-pointer hover:underline mb-1"
          @click="goToDetailsView('artist', track?.artists[0].id)"
        >
          {{ track.artists[0].name }}
        </span>
        <span
          class="block w-full font-normal text-lg text-base-700 dark:text-base-500 cursor-pointer hover:underline mb-1"
          @click="goToDetailsView('album', track?.album.id)"
        >
          {{ track.album.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.genre-pill {
  @apply flex justify-center items-center rounded-full bg-base-100 text-base-900 dark:bg-base-800 dark:text-base-200 px-3 py-1 border-2 border-current mb-2;
}
</style>
