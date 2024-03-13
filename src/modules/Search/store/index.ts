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
  CategoryResults,
} from '@/declarations/spoti.types';

import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

export const useSearchStore = defineStore('search', () => {
  const searchResults: Ref<Results> = ref<Results>({});
  const lastSearchTerm = ref('');

  const artistsResults: ComputedRef<CategoryResults<Artist> | {} > = computed(() => searchResults.value.artists || {});
  const albumsResults: ComputedRef<CategoryResults<Album> | {}> = computed(() => searchResults.value.albums || {});
  const tracksResults: ComputedRef<CategoryResults<Track> | {}> = computed(() => searchResults.value.tracks || {});

  async function search(
    q: string,
    filter?: Category,
    region?: string,
    resultsPerPage?: number,
    offset?: number,
  ) {
    const { FILTER_VALUE, MARKET, RESULTS_PER_PAGE } = DEFAULT_SEARCH_CONFIG;
    const { data } = await apiRequest<Results>(
      searchEndpoint,
      {
        params: {
          q,
          type: filter || FILTER_VALUE,
          market: region || MARKET,
          limit: resultsPerPage || RESULTS_PER_PAGE,
          offset: offset || 0,
        },
      },
    );

    lastSearchTerm.value = q;
    searchResults.value = data;
  }

  async function searchNextPage(filter: Category, resultsPerPage?: number) {
    const lastCategoryResults = searchResults.value[`${filter}s`] as CategoryResults<Album | Artist | Track>;
    const { offset: lastOffset, limit, total } = lastCategoryResults;

    if (lastOffset == null || lastOffset + limit >= total) return;

    const { MARKET, RESULTS_PER_PAGE } = DEFAULT_SEARCH_CONFIG;
    const { data } = await apiRequest<Results>(
      searchEndpoint,
      {
        params: {
          q: lastSearchTerm.value,
          type: filter,
          market: MARKET,
          limit: resultsPerPage || RESULTS_PER_PAGE,
          offset: lastOffset + (resultsPerPage || RESULTS_PER_PAGE),
        },
      },
    );

    searchResults.value = {
      ...searchResults.value,
      [`${filter}s`]: {
        ...data[`${filter}s`],
        items: [
          ...lastCategoryResults.items,
          ...(data[`${filter}s`]?.items as Artist[] | Album[] | Track[]) ?? [],
        ],
      },
    };
  }

  function clearSearch() {
    searchResults.value = {};
  }

  return {
    searchResults,
    search,
    searchNextPage,
    artistsResults,
    albumsResults,
    tracksResults,
    clearSearch,
    lastSearchTerm,
  };
});
