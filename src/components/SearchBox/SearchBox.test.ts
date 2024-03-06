import { defineComponent } from 'vue';

import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import SearchBox from './SearchBox.vue';

vi.mock('@vueuse/core', () => ({
  __esModule: true,
  useDark: vi.fn(() => ({ value: false })),
}));

const setup = (props = { modelValue: '' }) => ({
  user: userEvent.setup(),
  ...render(SearchBox, {
    global: {
      stubs: {
        transition: true,
        SVGIcon: defineComponent({
          name: 'SVGIcon',
          props: {
            name: { type: String, required: true },
            color: { type: String, default: 'black' },
          },
          template: '<span>{{$props.name}}</span>',
        }),
      },
    },
    props,
  }),
});

describe('ToDosList', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render component', () => {
    const { getByRole } = setup();

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('"search" icon is rendered', () => {
    const { getByText } = setup();

    expect(getByText('search')).toBeInTheDocument();
  });

  it('"clear" icon is not rendered initially', () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('clear-icon')).not.toBeInTheDocument();
  });

  it('"clear" icon is rendered when input has a value', async () => {
    const { user, getByRole, getByTestId } = setup();

    const input = getByRole('textbox');
    await user.type(input, 'test');

    expect(getByTestId('clear-icon')).toBeInTheDocument();
  });

  it('should emit "update:modelValue" event when input is changed', async () => {
    const { user, emitted, getByRole } = setup();

    const input = getByRole('textbox');
    await user.type(input, 'test');

    expect(emitted()).toHaveProperty('update:modelValue');
  });
});
