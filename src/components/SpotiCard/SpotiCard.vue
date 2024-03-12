<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import i18n from '@/i18n';

import type { Album, Artist, Track } from '@/declarations/spoti.types';

const props = defineProps<{
  item: Album | Artist | Track;
}>();

const router = useRouter();
const { t } = i18n.global;

const { type: cardType, name: cardTitle } = props.item;

const imageURL = computed(() => (
  cardType === 'track'
    ? (props.item as Track).album.images[1]?.url
    : (props.item as Album | Artist).images[1]?.url
));

const cardSubtitle = computed(() => {
  switch (cardType) {
      case 'album':
        return props.item.artists[0]?.name;
      case 'track':
        return props.item.artists.map((artist) => artist.name).join(', ');
      case 'artist':
        return t('{n} followers', { n: props.item.followers?.total });
      default:
        return '';
  }
});

function goToDetailsView() {
  router.push({
    name: 'ItemDetails',
    params: {
      id: props.item.id,
      type: cardType,
    },
  });
}
</script>

<template>
  <div
    class="spotify-card"
    @click="goToDetailsView"
  >
    <div
      class="w-full h-full overflow-hidden flex justify-center p-2"
    >
      <img
        :src="imageURL"
        alt="card picture"
        class="block h-full object-cover rounded-md"
        :class="{ 'circle': cardType === 'artist' }"
      >
    </div>
    <div class="flex flex-col justify-start items-start py-[0.625rem] px-5 overflow-hidden">
      <span class="font-bold text-lg mb-1">{{ cardTitle }}</span>
      <span class="font-light italic text-sm text-base-700 dark:text-base-500">{{ cardSubtitle }}</span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.spotify-card {
  @apply bg-base-400 hover:bg-base-500 dark:bg-base-800 dark:hover:bg-base-700 cursor-pointer w-full max-w-72 grid rounded-lg;
  grid-template-rows: 8.25rem 6.25rem;

  transition: background-color 0.3s ease;

  img.circle {
    clip-path: circle(40% at center);
  }

  span {
    width: calc(100%);
    @apply text-left whitespace-nowrap text-ellipsis overflow-hidden leading-3;
  }
}
</style>
