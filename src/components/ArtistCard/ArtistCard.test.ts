// import { screen } from '@testing-library/vue';
import { flushPromises } from '@vue/test-utils';
// import { createTestingPinia } from '@pinia/testing';

import {
  defineComponent,
  h,
  Suspense,
} from 'vue';

import ArtistCard from './ArtistCard.vue';

import { artistDetails } from '@/__mocks__/search-results';

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

// const TestArtistCard = defineComponent({
//   components: { ArtistCard },
//   template: '<Suspense><ArtistCard id="test_id_123" /></Suspense>',
// });

const setup = async () => {
  const wrapper = wrapInSuspense(ArtistCard, {
    props: {
      id: artistDetails.id,
    },
  });

  await flushPromises();
  await vi.dynamicImportSettled();

  return { ...wrapper };
};

describe('ArtistCard', () => {
  it.skip('should render the component', async () => {
    const { queryByText } = await setup();

    expect(queryByText(artistDetails.name)).toBeInTheDocument();
  });
});
