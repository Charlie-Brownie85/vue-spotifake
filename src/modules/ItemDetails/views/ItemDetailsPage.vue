<script setup lang="ts">
import { computed, onErrorCaptured } from 'vue';

import { useRouter } from 'vue-router';

import AlbumCard from '@/components/AlbumCard/AlbumCard.vue';
import ArtistCard from '@/components/ArtistCard/ArtistCard.vue';
import SongCard from '@/components/SongCard/SongCard.vue';

const props = defineProps<{
  type: string,
  id: string,
}>();

const router = useRouter();

const cardComponent = computed(() => {
  switch (props.type) {
      case 'album':
        return AlbumCard;
      case 'artist':
        return ArtistCard;
      case 'track':
        return SongCard;
      default:
        return 'div';
  }
});

// This should capture any error that occurs in the child components
// as they are async components and perform an API call in their setup()
onErrorCaptured(() => {
  router.push({ name: 'error', params: { errorCode: 'ITEM_DETAILS_ERROR' } });
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
        <SkeletonDetails />
      </template>
    </Suspense>
  </div>
</template>

<style lang="postcss" scoped>

</style>
