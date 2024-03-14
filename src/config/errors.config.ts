import type { GlobalErrorsConfig } from '@/declarations/common.types';

export const GlobalErrors: GlobalErrorsConfig = {
  DEFAULT_ERROR: {
    mainErrorMsg: 'Oops! Something went wrong...',
    subErrorMsg: 'Please, try again later.',
    btnMsg: 'Return to search',
  },
  AUTH_ERROR: {
    mainErrorMsg: 'Authentication error',
    subErrorMsg: 'We failed getting authentication from Spotify.',
    btnMsg: 'Try again',
  },
  SEARCH_ERROR: {
    mainErrorMsg: 'Search error',
    subErrorMsg: 'We failed getting results from Spotify.',
    btnMsg: 'Please, try again',
  },
  ITEM_DETAILS_ERROR: {
    mainErrorMsg: 'Item info error',
    subErrorMsg: 'We had some problems retrieving this item info from Spotify.',
    btnMsg: 'Please, try again',
  },
};
