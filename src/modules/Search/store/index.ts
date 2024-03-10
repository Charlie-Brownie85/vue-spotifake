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
  Category,
} from '@/declarations/spoti.types';

import { DEFAULT_FILTER_VALUE } from '@/config/search.config';

export const useSearchStore = defineStore('search', () => {
  const searchResults: Ref<Results> = ref<Results>({});
  const lastSearchTerm = ref('');

  const artistsResults: ComputedRef<Artist[]> = computed(() => searchResults.value.artists?.items || []);
  const albumsResults: ComputedRef<Album[]> = computed(() => searchResults.value.albums?.items || []);
  const tracksResults: ComputedRef<Track[]> = computed(() => searchResults.value.tracks?.items || []);

  async function search(q: string, filter?: Category) {
    const { data } = await apiRequest<Results>(
      searchEndpoint,
      {
        params: {
          q,
          type: filter || DEFAULT_FILTER_VALUE,
          market: 'es',
        },
      },
    );

    lastSearchTerm.value = q;
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
    lastSearchTerm,
  };
});
