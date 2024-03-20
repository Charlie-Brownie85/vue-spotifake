export type GlobalError = {
  mainErrorMsg: string,
  btnMsg: string,
  subErrorMsg: string,
}

export type GlobalErrorName = 'DEFAULT_ERROR'
  | 'AUTH_ERROR'
  | 'SEARCH_ERROR'
  | 'ITEM_DETAILS_ERROR';

export type GlobalErrorsConfig = Record<GlobalErrorName, GlobalError>;
