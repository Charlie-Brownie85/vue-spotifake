import { render } from '@testing-library/vue';

import HeaderCompo from './HeaderCompo.vue';

const setup = () => ({
  ...render(HeaderCompo, {
    global: {
      stubs: {
        transition: true,
      },
    },
  }),
});

describe('HeaderCompo', () => {
  it('renders correctly', () => {
    const { getByText } = setup();
    expect(getByText('Spotifake')).toBeTruthy();
  });
});
