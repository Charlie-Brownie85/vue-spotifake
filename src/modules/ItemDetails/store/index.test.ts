import { setActivePinia, createPinia } from 'pinia';

import {
  albumsEndpoint,
  artistsEndpoint,
  tracksEndpoint,
} from '../api';

import { useDetailsStore } from './index';

import { getApiRoute } from '@/utils';

import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

import type {
  AlbumDetails,
  Artist,
  Track,
} from '@/declarations/spoti.types';

import {
  albumDetails,
  artistDetails,
  tracks,
} from '@/__mocks__/search-results';

const mockedApiRequest = vi.fn(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (...args: any[]) => Promise.resolve(
    { data: albumDetails },
  ) as Promise<{ data: AlbumDetails | Artist | Track}>,
);

vi.mock('@/utils', async () => {
  const actual: Object = await vi.importActual('@/utils');
  return {
    ...actual,
    __esModule: true,
    apiRequest: (...args: any[]) => mockedApiRequest(...args),
  };
});

const trackDetails = tracks.items[0];

describe('Item Details store', () => {
  let store: ReturnType<typeof useDetailsStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useDetailsStore();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call the fetchAlbum endpoint with the correct parameters when no market is passed', async () => {
    await store.fetchAlbum('test_id_123');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      getApiRoute(albumsEndpoint, { id: 'test_id_123' }),
      {
        params: {
          market: DEFAULT_SEARCH_CONFIG.MARKET,
        },
      },
    );
  });

  it('should call the fetchAlbum endpoint with the correct parameters when market value is passed', async () => {
    await store.fetchAlbum('test_id_123', 'uk');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      getApiRoute(albumsEndpoint, { id: 'test_id_123' }),
      {
        params: {
          market: 'uk',
        },
      },
    );
  });

  it('should return the correct album details when fetchAlbum is called', async () => {
    const album = await store.fetchAlbum('test_id_123');

    expect(album).toEqual(albumDetails);
  });

  it('should call the fetchArtist endpoint with the correct parameters', async () => {
    await store.fetchArtist('test_id_123');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      getApiRoute(artistsEndpoint, { id: 'test_id_123' }),
    );
  });

  it('should return the correct artist details when fetchArtist is called', async () => {
    mockedApiRequest.mockImplementationOnce(() => Promise.resolve({ data: artistDetails }));
    const artist = await store.fetchArtist('test_id_123');

    expect(artist).toEqual(artistDetails);
  });

  it('should call the fetchTrack endpoint with the correct parameters', async () => {
    await store.fetchTrack('test_id_123', 'uk');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      getApiRoute(tracksEndpoint, { id: 'test_id_123' }),
      {
        params: {
          market: 'uk',
        },
      },
    );
  });

  it('should return the correct artist details when fetchTrack is called', async () => {
    mockedApiRequest.mockImplementationOnce(() => Promise.resolve({ data: trackDetails }));
    const track = await store.fetchTrack('test_id_123');

    expect(track).toEqual(trackDetails);
  });
});
