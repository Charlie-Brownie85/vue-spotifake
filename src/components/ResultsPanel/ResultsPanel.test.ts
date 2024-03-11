import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import ResultsPanel from './ResultsPanel.vue';

import SpotiCard from '@/components/SpotiCard/SpotiCard.vue';

import type {
  Album,
  Artist,
  Track,
  CategoryResults,
} from '@/declarations/spoti.types';

import {
  tracks,
  artists,
  albums,
} from '@/__mocks__/search-results';

const artistResults: CategoryResults<Artist> = {
  ...artists,
  items: artists.items.slice(0, 5),
};
const albumResults: CategoryResults<Album> = {
  ...albums,
  items: albums.items.slice(0, 5),
};
const trackResults: CategoryResults<Track> = {
  ...tracks,
  items: tracks.items.slice(0, 5),
};

const setup = (props: {
  results: CategoryResults<Artist | Track | Album>,
  maxResults?: number | null,
  enableInfiniteScroll?: boolean,
  loadMoreDataFunction?: () => void,
} = { results: artistResults }) => ({
  user: userEvent.setup(),
  ...render(ResultsPanel, {
    global: {
      components: {
        SpotiCard,
      },
      stubs: {
        transition: true,
      },
    },
    props,
  }),
});

describe('ResultsPanel', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the correct number of SpotiCards', () => {
    const { getAllByRole } = setup();

    const cards = getAllByRole('listitem');

    expect(cards).toHaveLength(artistResults.items.length);
  });

  it('should render the correct category title when artists info is provided', () => {
    const { getByText } = setup();

    const title = getByText('Artists');

    expect(title).toBeInTheDocument();
  });

  it('should render the correct category title when albums info is provided', () => {
    const { getByText } = setup({ results: albumResults });

    const title = getByText('Albums');

    expect(title).toBeInTheDocument();
  });

  it('should render the correct category title when tracks info is provided', () => {
    const { getByText } = setup({ results: trackResults });

    const title = getByText('Songs');

    expect(title).toBeInTheDocument();
  });

  it('should not render "See more" by default', () => {
    const { queryByText } = setup();

    expect(queryByText('See more')).not.toBeInTheDocument();
  });

  it('should render "See more" when results are greater than property "maxResults" value provided', () => {
    const { getByText } = setup({ results: trackResults, maxResults: 3 });

    expect(getByText('See more')).toBeInTheDocument();
  });

  it('should emit event of type "see-more" containing the category when clicked "See more" text', async () => {
    const { getByText, user, emitted } = setup({ results: trackResults, maxResults: 3 });

    await user.click(getByText('See more'));

    expect(emitted('see-more')).toEqual([['track']]);
  });

  it('should display all results when no max is provided', async () => {
    const { getAllByRole } = setup({
      results: tracks,
    });

    const cards = getAllByRole('listitem');

    expect(cards).toHaveLength(tracks.items.length);
  });
});
