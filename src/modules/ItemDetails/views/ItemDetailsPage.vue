<script setup lang="ts">
import { computed } from 'vue';

import AlbumCard from '@/components/AlbumCard/AlbumCard.vue';

const props = defineProps<{
  type: string,
  id: string,
}>();
const cardComponent = computed(() => {
  switch (props.type) {
      case 'album':
        return AlbumCard;
      case 'artist':
        return 'ArtistCard';
      case 'track':
        return 'TrackCard';
      default:
        return 'div';
  }
});
</script>

<template>
  <Suspense>
    <component
      :is="cardComponent"
      :id="props.id"
    />
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style lang="postcss" scoped>

</style>
