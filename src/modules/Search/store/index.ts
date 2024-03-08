import { ref, computed } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { defineStore } from 'pinia';

import { searchEndpoint } from '../api';

import { apiRequest } from '@/utils';

import type {
  Results,
  Artist,
  Album,
  Track,
} from '@/declarations/spoti.types';

export const useSearchStore = defineStore('search', () => {
  const searchResults: Ref<Results> = ref<Results>({});

  const artistsResults: ComputedRef<Artist[]> = computed(() => searchResults.value.artists?.items || []);
  const albumsResults: ComputedRef<Album[]> = computed(() => searchResults.value.albums?.items || []);
  const tracksResults: ComputedRef<Track[]> = computed(() => searchResults.value.tracks?.items || []);

  async function search(q: string) {
    const { data } = await apiRequest<Results>(
      searchEndpoint,
      {
        params: {
          q,
          type: 'album,artist,track',
          market: 'es',
        },
      },
    );

    searchResults.value = data;
  }

  function clearSerch() {
    searchResults.value = {};
  }

  return {
    searchResults,
    search,
    artistsResults,
    albumsResults,
    tracksResults,
    clearSerch,
  };
});
