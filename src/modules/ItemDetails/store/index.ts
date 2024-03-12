import { defineStore } from 'pinia';

import { albumsEndpoint } from '../api';

import { apiRequest, getApiRoute } from '@/utils';
import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

import type {
  AlbumDetails,
} from '@/declarations/spoti.types';

export const useDetailsStore = defineStore('details', () => {
  async function fetchAlbum(id: string, market?: string) {
    const route = getApiRoute(albumsEndpoint, { id });
    const { data } = await apiRequest<AlbumDetails>(
      route,
      {
        params: {
          market: market || DEFAULT_SEARCH_CONFIG.MARKET,
        },
      },
    );

    return data;
  }

  return {
    fetchAlbum,
  };
});
