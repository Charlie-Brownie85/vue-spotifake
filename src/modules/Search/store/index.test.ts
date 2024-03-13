import { setActivePinia, createPinia } from 'pinia';

import { searchEndpoint } from '../api';

import { useSearchStore } from './index';

import { DEFAULT_SEARCH_CONFIG } from '@/config/search.config';

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
    expect(store.artistsResults).toEqual({});
    expect(store.albumsResults).toEqual({});
    expect(store.tracksResults).toEqual({});
  });

  it('should call the search endpoint with the correct parameters when no filter is passed', async () => {
    await store.search('test');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      searchEndpoint,
      {
        params: {
          q: 'test',
          type: DEFAULT_SEARCH_CONFIG.FILTER_VALUE,
          market: DEFAULT_SEARCH_CONFIG.MARKET,
          limit: DEFAULT_SEARCH_CONFIG.RESULTS_PER_PAGE,
          offset: 0,
        },
      },
    );
  });

  it('should call the search endpoint with the correct parameters when filter value is passed', async () => {
    await store.search('test', 'album');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      searchEndpoint,
      {
        params: {
          q: 'test',
          type: 'album',
          market: DEFAULT_SEARCH_CONFIG.MARKET,
          limit: DEFAULT_SEARCH_CONFIG.RESULTS_PER_PAGE,
          offset: 0,
        },
      },
    );
  });

  it('should set the search results correctly', async () => {
    await store.search('test');

    expect(store.searchResults).toEqual(results);
    expect(store.artistsResults).toEqual(artistResults);
    expect(store.albumsResults).toEqual(albumResults);
    expect(store.tracksResults).toEqual(trackResults);
  });

  it('should clear the search results correctly', async () => {
    await store.search('test');

    expect(store.searchResults).toEqual(results);

    store.clearSearch();

    expect(store.searchResults).toEqual({});
  });

  it('should call the search endpoint with the correct parameters when calling searchNextPage', async () => {
    await store.search('test');

    expect(store.searchResults).toEqual(results);

    mockedApiRequest.mockResolvedValueOnce({ data: results });

    await store.searchNextPage('artist');

    expect(mockedApiRequest).toHaveBeenCalledWith(
      searchEndpoint,
      {
        params: {
          q: 'test',
          type: 'artist',
          market: DEFAULT_SEARCH_CONFIG.MARKET,
          limit: DEFAULT_SEARCH_CONFIG.RESULTS_PER_PAGE,
          offset: DEFAULT_SEARCH_CONFIG.RESULTS_PER_PAGE,
        },
      },
    );
  });

  it('should call the search endpoint with the correct parameters when calling searchNextPage and provide results per page', async () => {
    await store.search('test');

    expect(store.searchResults).toEqual(results);

    mockedApiRequest.mockResolvedValueOnce({ data: results });

    await store.searchNextPage('artist', 15);

    expect(mockedApiRequest).toHaveBeenCalledWith(
      searchEndpoint,
      {
        params: {
          q: 'test',
          type: 'artist',
          market: DEFAULT_SEARCH_CONFIG.MARKET,
          limit: 15,
          offset: 15,
        },
      },
    );
  });

  it('should update search results when calling searchNextPage', async () => {
    await store.search('test');

    expect(store.searchResults).toEqual(results);

    mockedApiRequest.mockResolvedValueOnce({
      data: {
        ...results,
        artists: {
          ...results.artists,
          items: [...results.artists.items, ...results.artists.items],
          offset: 20,
        },
      },
    });

    await store.searchNextPage('album');

    expect(store.searchResults).toEqual({
      ...results,
      albums: {
        ...results.albums,
        items: [...results.albums.items, ...results.albums.items],
      },
    });
  });

  it('should not call the search endpoint when calling searchNextPage and there are no more results', async () => {
    const limitedResults = {
      ...results,
      artists: {
        ...results.artists,
        total: 19,
      },
    };

    mockedApiRequest.mockResolvedValueOnce({ data: limitedResults });

    await store.search('test');

    expect(store.searchResults).toEqual(limitedResults);

    await store.searchNextPage('artist');

    expect(mockedApiRequest).toHaveBeenCalledTimes(1);
  });
});
