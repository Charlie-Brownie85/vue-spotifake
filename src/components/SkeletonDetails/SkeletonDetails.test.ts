import { render } from '@testing-library/vue';

import SkeletonDetails from './SkeletonDetails.vue';

const setup = () => ({
  ...render(SkeletonDetails, {
    global: {
      stubs: {
        transition: true,
      },
    },
  }),
});

describe('SkeletonDetails', () => {
  it('renders correctly', () => {
    const { getAllByTestId, getByTestId } = setup();

    const skeletonShape = getByTestId('skeleton-shape');
    const skeletonPills = getAllByTestId('skeleton-pill');
    const skeletonLines = getAllByTestId('skeleton-line');

    expect(skeletonShape).toBeTruthy();
    expect(skeletonPills).toHaveLength(3);
    expect(skeletonLines).toHaveLength(5);
  });
});
