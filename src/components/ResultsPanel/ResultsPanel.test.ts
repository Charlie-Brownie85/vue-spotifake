import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import ResultsPanel from './ResultsPanel.vue';

import { SpotiCard } from '@/components/SpotiCard/SpotiCard.vue';

import type { Album, Artist, Track } from '@/types/spotify';

import {
  trackResults,
  artistResults,
  albumResults,
} from '@/__mocks__/search-results';

const artists: Artist = artistResults.artists.items.slice(0, 3);
const tracks: Track = trackResults.tracks.items.slice(0, 3);
const albums: Album = albumResults.albums.items.slice(0, 3);

const setup = (props = { results: artists }) => ({
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

    expect(cards).toHaveLength(artists.length);
  });

  it('should render the correct category title when artists info is provided', () => {
    const { getByText } = setup();

    const title = getByText('Artists');

    expect(title).toBeInTheDocument();
  });

  it('should render the correct category title when albums info is provided', () => {
    const { getByText } = setup({ results: albums });

    const title = getByText('Albums');

    expect(title).toBeInTheDocument();
  });

  it('should render the correct category title when tracks info is provided', () => {
    const { getByText } = setup({ results: tracks });

    const title = getByText('Songs');

    expect(title).toBeInTheDocument();
  });

  it('should not render "See more" by default', () => {
    const { queryByText } = setup();

    expect(queryByText('See more')).not.toBeInTheDocument();
  });

  it('should render "See more" when requested', () => {
    const { getByText } = setup({ results: tracks, seeMore: true });

    expect(getByText('See more')).toBeInTheDocument();
  });

  it('should emit event of type "see-more" containing the category when clicked "See more" text', async () => {
    const { getByText, user, emitted } = setup({ results: tracks, seeMore: true });

    await user.click(getByText('See more'));

    expect(emitted('see-more')).toEqual([['track']]);
  });
});
