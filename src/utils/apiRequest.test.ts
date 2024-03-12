import apiRequest from './apiRequest';
import type { ApiRequestOptions } from './apiRequest';

const mocks = vi.hoisted(() => ({
  mockedHttpClient: {
    request: vi.fn(),
  },
}));

vi.mock('@/composables/useAuth', () => ({
  useHttpClient: vi.fn().mockReturnValue(mocks.mockedHttpClient),
}));

describe('apiRequest', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should make a GET request with the correct URL and options', () => {
    const url = '/example';
    const requestOptions: ApiRequestOptions = {
      requestMethod: 'get',
      params: { id: 1 },
    };

    apiRequest(url, requestOptions);

    expect(mocks.mockedHttpClient.request).toHaveBeenCalledWith({
      url,
      method: requestOptions.requestMethod,
      baseURL: 'https://api.spotify.com/v1',
      params: { id: 1 },
      paramsSerializer: expect.any(Function),
    });
  });
});
