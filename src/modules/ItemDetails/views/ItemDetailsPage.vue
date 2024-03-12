<script setup lang="ts">
import { computed } from 'vue';

import AlbumCard from '@/components/AlbumCard/AlbumCard.vue';
import ArtistCard from '@/components/ArtistCard/ArtistCard.vue';

const props = defineProps<{
  type: string,
  id: string,
}>();
const cardComponent = computed(() => {
  switch (props.type) {
      case 'album':
        return AlbumCard;
      case 'artist':
        return ArtistCard;
      case 'track':
        return 'TrackCard';
      default:
        return 'div';
  }
});
</script>

<template>
  <div class="py-8">
    <button
      type="button"
      class="back-button ml-5 mb-3"
      @click="$router.back()"
    >
      <SVGIcon
        name="arrow"
        color="white"
        class="w-4 h-4 rotate-180"
      />
    </button>
    <Suspense>
      <component
        :is="cardComponent"
        :id="props.id"
      />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<style lang="postcss" scoped>

</style>
