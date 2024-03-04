import { reactive } from 'vue';

import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';
import qs from 'qs';
import { getUnixTime } from 'date-fns';

interface AuthStateType {
  loading: boolean,
  initialized: boolean,
  isAuthenticated: boolean,
  clientId: string,
  clientSecret: string,
  authURL: string,
  token: string,
  expire?: number | null,
}

export interface HttpClientOptions {
  excludedUrls?: string[];
  global: AxiosRequestConfig;
}

export const AuthState = reactive<AuthStateType>({
  loading: false,
  initialized: false,
  isAuthenticated: false,
  token: '',
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
  authURL: import.meta.env.VITE_SPOTIFY_AUTH_URL,
  expire: null,
});

export const httpClientCancelTokens = new Map<string, CancelTokenSource>();

let axiosInstance: AxiosInstance;

export const getAuthToken = async () => {
  if (!axiosInstance) return;

  AuthState.loading = true;

  const { clientId, clientSecret, authURL } = AuthState;
  const basicAuth = btoa(`${clientId}:${clientSecret}`);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${basicAuth}`,
  };
  const body = qs.stringify({ grant_type: 'client_credentials' });

  const response = await axiosInstance.post(authURL, body, { headers });

  AuthState.token = response.data.access_token;
  AuthState.expire = getUnixTime(new Date()) + response.data.expires_in;
  AuthState.isAuthenticated = true;
  AuthState.loading = false;
};

export const initAuth = async (
  authOptions?: { clientId: string, clientSecret: string, authURL: string },
  options?: HttpClientOptions,
) => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      ...options?.global,
    });
  }

  AuthState.clientId = authOptions?.clientId ?? AuthState.clientId;
  AuthState.clientSecret = authOptions?.clientSecret ?? AuthState.clientSecret;
  AuthState.authURL = authOptions?.authURL ?? AuthState.authURL;

  await getAuthToken();
  AuthState.initialized = true;

  return AuthState;
};

export const useHttpClient = (options?: HttpClientOptions): AxiosInstance => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      ...options?.global,
    });
  }

  axiosInstance.interceptors.request.use(request => {
    if (AuthState?.token) {
      // @ts-ignore
      request.headers.common.Authorization = `Bearer ${AuthState.token}`;
    } else {
      // @ts-ignore
      delete request.headers.common.Authorization;
    }

    // Add cancelToken to request and register it
    const source = axios.CancelToken.source();
    if (request.url) {
      httpClientCancelTokens.set(request.url, source);
    }

    return {
      ...request,
      cancelToken: source.token,
    };
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response?.config?.url) {
        httpClientCancelTokens.delete(response.config.url);
      }
      return response;
    },
    async responseError => {
      const { response, config: request } = responseError;

      if (request?.url) {
        httpClientCancelTokens.delete(request.url);
      }
      // Apply only if is an unauthorized error (token expired)
      if (response?.status === 401) {
        const nowDateUnix = getUnixTime(new Date());
        const isTokenExpired = AuthState.expire && nowDateUnix > AuthState.expire;
        if (
          isTokenExpired
          && !options?.excludedUrls?.includes(request.url)
        ) {
          await getAuthToken();
          request.headers.Authorization = `Bearer ${AuthState.token}`;

          return axiosInstance.request(request);
        }
      }

      throw responseError;
    },
  );

  return axiosInstance;
};
