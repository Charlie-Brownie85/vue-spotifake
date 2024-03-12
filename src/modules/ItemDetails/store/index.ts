import { defineStore } from 'pinia';

import {
  albumsEndpoint,
  artistsEndpoint,
  tracksEndpoint,
} from '../api';

import { apiRequest, getApiRoute } from '@/utils';
import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

import type {
  AlbumDetails,
  Artist,
  Track,
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

  async function fetchTrack(id: string, market?: string) {
    const route = getApiRoute(tracksEndpoint, { id });
    const { data } = await apiRequest<Track>(
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
    fetchArtist,
    fetchTrack,
  };
});
