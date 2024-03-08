import { setActivePinia, createPinia } from 'pinia';

import { searchEndpoint } from '../api';

import { useSearchStore } from './index';

import {
  tracks as trackResults,
  artists as artistResults,
  albums as albumResults,
  results,
} from '@/__mocks__/search-results';

const mockedApiRequest = vi.fn(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (...args: any[]) => Promise.resolve({ data: results }),
);

vi.mock('@/utils', () => ({
  __esModule: true,
  apiRequest: (...args: any[]) => mockedApiRequest(...args),
}));

describe('Search store', () => {
  let store: ReturnType<typeof useSearchStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useSearchStore();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should have the correct default values', () => {
    expect(store.searchResults).toEqual({});
    expect(store.artistsResults).toEqual([]);
    expect(store.albumsResults).toEqual([]);
    expect(store.tracksResults).toEqual([]);
  });

  it('should call the search endpoint with the correct parameters', async () => {
    await store.search('test');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      searchEndpoint,
      {
        params: {
          q: 'test',
          type: 'album,artist,track',
          market: 'es',
        },
      },
    );
  });

  it('should set the search results correctly', async () => {
    await store.search('test');

    expect(store.searchResults).toEqual(results);
    expect(store.artistsResults).toEqual(artistResults.items);
    expect(store.albumsResults).toEqual(albumResults.items);
    expect(store.tracksResults).toEqual(trackResults.items);
  });
});
