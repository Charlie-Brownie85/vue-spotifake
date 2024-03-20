import { render, within } from '@testing-library/vue';

import SkeletonResults from './SkeletonResults.vue';

const setup = (props = { infinite: false }) => ({
  ...render(SkeletonResults, {
    global: {
      stubs: {
        transition: true,
      },
    },
    props,
  }),
});

describe('SkeletonResults', () => {
  it('renders correctly when no flag "infinite" is passed', () => {
    const { getAllByTestId, getByTestId } = setup();

    const skeletonPills = getAllByTestId('skeleton-pill');
    const skeletonList = getByTestId('skeleton-list');
    const skeletonShapes = within(skeletonList).getAllByRole('listitem');

    expect(skeletonPills).toHaveLength(2);
    expect(skeletonShapes).toHaveLength(5);
  });

  it('renders correctly when flag "infinite" is passed', () => {
    const { getAllByTestId, getByTestId } = setup({ infinite: true });

    const skeletonPills = getAllByTestId('skeleton-pill');
    const skeletonList = getByTestId('skeleton-list');
    const skeletonShapes = within(skeletonList).getAllByRole('listitem');

    expect(skeletonPills).toHaveLength(2);
    expect(skeletonShapes).toHaveLength(12);
  });
});
