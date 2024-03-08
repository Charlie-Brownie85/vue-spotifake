import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';

import { searchEndpoint } from '../api';

import { apiRequest } from '@/utils';

import type { Results } from '@/declarations/spoti.types';

export const useSearchStore = defineStore('search', () => {
  const searchResults: Ref<Results> = ref<Results>({});

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

  return {
    searchResults,
    search,
  };
});
