import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import ErrorView from './ErrorView.vue';

import { GlobalErrors } from '@/config/errors.config';

const mockPush = vi.fn();

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: mockPush,
  })),
}));

const setup = (props = {}) => ({
  user: userEvent.setup(),
  ...render(ErrorView, {
    global: {
      stubs: {
        teleport: true,
        transition: false,
      },
      mocks: {
        $t: (msg: string) => msg,
      },
    },
    props,
  }),
});

describe('Error page', () => {
  it('renders default error messages', () => {
    const { getByText } = setup();
    expect(getByText(GlobalErrors.DEFAULT_ERROR.mainErrorMsg)).toBeInTheDocument();
    expect(getByText(GlobalErrors.DEFAULT_ERROR.subErrorMsg)).toBeInTheDocument();
  });

  it('renders auth error messages', () => {
    const { getByText } = setup({ errorCode: 'AUTH_ERROR' });
    expect(getByText(GlobalErrors.AUTH_ERROR.mainErrorMsg)).toBeInTheDocument();
    expect(getByText(GlobalErrors.AUTH_ERROR.subErrorMsg)).toBeInTheDocument();
  });

  it('renders search error messages', () => {
    const { getByText } = setup({ errorCode: 'SEARCH_ERROR' });
    expect(getByText(GlobalErrors.SEARCH_ERROR.mainErrorMsg)).toBeInTheDocument();
    expect(getByText(GlobalErrors.SEARCH_ERROR.subErrorMsg)).toBeInTheDocument();
  });

  it('renders item details error messages', () => {
    const { getByText } = setup({ errorCode: 'ITEM_DETAILS_ERROR' });
    expect(getByText(GlobalErrors.ITEM_DETAILS_ERROR.mainErrorMsg)).toBeInTheDocument();
    expect(getByText(GlobalErrors.ITEM_DETAILS_ERROR.subErrorMsg)).toBeInTheDocument();
  });

  it('renders button with proper text when default error', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: GlobalErrors.DEFAULT_ERROR.btnMsg })).toBeInTheDocument();
  });

  it('renders button with proper text when auth error', () => {
    const { getByRole } = setup({ errorCode: 'AUTH_ERROR' });
    expect(getByRole('button', { name: GlobalErrors.AUTH_ERROR.btnMsg })).toBeInTheDocument();
  });

  it('renders button with proper text when search error', () => {
    const { getByRole } = setup({ errorCode: 'SEARCH_ERROR' });
    expect(getByRole('button', { name: GlobalErrors.SEARCH_ERROR.btnMsg })).toBeInTheDocument();
  });

  it('renders button with proper text when item details error', () => {
    const { getByRole } = setup({ errorCode: 'ITEM_DETAILS_ERROR' });
    expect(getByRole('button', { name: GlobalErrors.ITEM_DETAILS_ERROR.btnMsg })).toBeInTheDocument();
  });

  it('redirects to home if the button is clicked', async () => {
    const { getByRole } = setup();
    const button = getByRole('button', { name: GlobalErrors.DEFAULT_ERROR.btnMsg });

    await userEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith({ name: 'search' });
  });
});
