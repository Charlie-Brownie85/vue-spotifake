<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import type { Artist } from '@/declarations/spoti.types';

import { useDetailsStore } from '@/modules/ItemDetails/store';

const props = defineProps<{
  id: string,
}>();

const { fetchArtist } = useDetailsStore();

async function fetchArtistDetails() {
  return fetchArtist(props.id);
}

const artist: Ref<Artist> = ref(await fetchArtistDetails());
</script>

<template>
  <div class="artist-card">
    <div
      class="w-full h-full overflow-hidden flex justify-center p-2"
    >
      <img
        :src="artist?.images[1]?.url"
        alt="artist picture"
        class="block h-full object-cover"
      >
    </div>
    <div class="flex flex-col justify-start items-center py-[0.625rem] px-5 overflow-hidden mb-5">
      <h2>
        <span class="font-bold text-2xl mb-1 font-body text-base-900 dark:text-base-200">
          {{ artist?.name }}
        </span>
      </h2>
      <span class="font-normal italic text-lg text-base-700 dark:text-base-500 mb-1">
        {{ $t('{n} followers', { n: artist.followers.total }) }}
      </span>
    </div>
    <div class="flex justify-center px-5">
      <ul class="flex gap-2 flex-wrap">
        <li
          v-for="genre in artist?.genres"
          :key="genre"
          class="genre-pill"
        >
          <span class="text-nowrap">{{ genre }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
img {
  clip-path: circle(40% at center);
}

.genre-pill {
  @apply flex justify-center items-center rounded-full bg-base-100 text-base-900 dark:bg-base-800 dark:text-base-200 px-3 py-1 border-2 border-current mb-2;
}
</style>
