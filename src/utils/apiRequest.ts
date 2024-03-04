import type { AxiosPromise } from 'axios';

import getApiRoute from './getApiRoute';

import { useHttpClient } from '@/composables/useAuth';

const httpClient = useHttpClient();

export default function apiRequest<T = any>(
  method: any,
  url: any,
  {
    data = {},
    params = {},
    query = {},
    customConfig = {},
  },
  whichApi = 'base',
): AxiosPromise<T> {
  return httpClient({
    method,
    url: getApiRoute(url, { params, query }, whichApi),
    data,
    ...customConfig,
  });
}
