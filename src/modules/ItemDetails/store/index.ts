import { defineStore } from 'pinia';

import { albumsEndpoint, artistsEndpoint } from '../api';

import { apiRequest, getApiRoute } from '@/utils';
import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

import type {
  AlbumDetails,
  Artist,
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

  async function fetchArtist(id: string) {
    const route = getApiRoute(artistsEndpoint, { id });
    const { data } = await apiRequest<Artist>(route);
    return data;
  }

  return {
    fetchAlbum,
    fetchArtist,
  };
});
