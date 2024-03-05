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
};
