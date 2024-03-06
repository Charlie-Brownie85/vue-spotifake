import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import SpotiCard from './SpotiCard.vue';

import type { Album, Artist, Track } from '@/types/spotify';

import {
  trackResults,
  artistResults,
  albumResults,
} from '@/__mocks__/search-results';

const artistInfo: Artist = artistResults.artists.items[0];
const trackInfo: Track = trackResults.tracks.items[0];
const albumInfo: Album = albumResults.albums.items[0];

const setup = (props = { item: artistInfo }) => ({
  user: userEvent.setup(),
  ...render(SpotiCard, {
    global: {
      stubs: {
        transition: true,
      },
    },
    props,
  }),
});

describe('SpotiCard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the image correctly when artist info is provided', () => {
    const { getByRole } = setup();

    const image = getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', artistInfo.images[1].url);
    expect(image).toHaveClass('circle');
  });

  it('should render the correct title and subtitle when artist info is provided', () => {
    const { getByText } = setup();

    const title = getByText(artistInfo.name);
    const subtitle = getByText(`${artistInfo.followers.total} followers`);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the image correctly when album info is provided', () => {
    const { getByRole } = setup({ item: albumInfo });

    const image = getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', albumInfo.images[1].url);
    expect(image).not.toHaveClass('circle');
  });

  it('should render the correct title and subtitle when album info is provided', () => {
    const { getByText } = setup({ item: albumInfo });

    const title = getByText(albumInfo.name);
    const subtitle = getByText(albumInfo.artists[0].name);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the image correctly when track info is provided', () => {
    const { getByRole } = setup({ item: trackInfo });

    const image = getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', trackInfo.album.images[1].url);
    expect(image).not.toHaveClass('circle');
  });

  it('should render the correct title and subtitle when track info is provided', () => {
    const { getByText } = setup({ item: trackInfo });

    const title = getByText(trackInfo.name);
    const subtitle = getByText(trackInfo.artists[0].name);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
