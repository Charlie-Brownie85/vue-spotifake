// import { screen } from '@testing-library/vue';
import { flushPromises } from '@vue/test-utils';
// import { createTestingPinia } from '@pinia/testing';

import {
  defineComponent,
  h,
  Suspense,
} from 'vue';

import SongCard from './SongCard.vue';

import { tracks } from '@/__mocks__/search-results';

const trackDetails = tracks.items[0];

// import { useDetailsStore } from '@/modules/ItemDetails/store';

export function wrapInSuspense(
  component: ReturnType<typeof defineComponent>,
  { props }: { props: object },
): ReturnType<typeof defineComponent> {
  return defineComponent({
    render() {
      return h(
        'div',
        { id: 'root' },
        h(Suspense, null, {
          default() {
            return h(component, props);
          },
          fallback: h('div', 'fallback'),
        }),
      );
    },
  });
}

// const TestSongCard = defineComponent({
//   components: { SongCard },
//   template: '<Suspense><SongCard id="test_id_123" /></Suspense>',
// });

const setup = async () => {
  const wrapper = wrapInSuspense(SongCard, {
    props: {
      id: trackDetails.id,
    },
  });

  await flushPromises();
  await vi.dynamicImportSettled();

  return { ...wrapper };
};

describe('SongCard', () => {
  it.skip('should render the component', async () => {
    const { queryByText } = await setup();

    expect(queryByText(trackDetails.name)).toBeInTheDocument();
  });
});
