import { setActivePinia, createPinia } from 'pinia';

import { albumsEndpoint } from '../api';

import { useDetailsStore } from './index';

import { getApiRoute } from '@/utils';

import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

import { albumDetails } from '@/__mocks__/search-results';

const mockedApiRequest = vi.fn(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (...args: any[]) => Promise.resolve({ data: albumDetails }),
);

vi.mock('@/utils', async () => {
  const actual: Object = await vi.importActual('@/utils');
  return {
    ...actual,
    __esModule: true,
    apiRequest: (...args: any[]) => mockedApiRequest(...args),
  };
});

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

  it('should call the search endpoint with the correct parameters when market value is passed', async () => {
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

  it('should return the correct album details', async () => {
    const album = await store.fetchAlbum('test_id_123');

    expect(album).toEqual(albumDetails);
  });
});
