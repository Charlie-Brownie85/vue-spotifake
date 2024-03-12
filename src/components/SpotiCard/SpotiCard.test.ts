import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import type { Mock } from 'vitest';

import { useRouter } from 'vue-router';

import SpotiCard from './SpotiCard.vue';

import type { Album, Artist, Track } from '@/declarations/spoti.types';

import {
  tracks as trackResults,
  artists as artistResults,
  albums as albumResults,
} from '@/__mocks__/search-results';

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

const artistInfo: Artist = artistResults.items[0];
const trackInfo: Track = trackResults.items[0];
const albumInfo: Album = albumResults.items[0];

const setup = (props: { item: Artist | Album | Track } = { item: artistInfo }) => ({
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

  it('should navigate to the artist page when clicking on the card', async () => {
    const push = vi.fn();
    (useRouter as Mock).mockImplementationOnce(() => ({
      push,
    }));

    const { user, getByTestId } = setup({ item: albumInfo });

    const card = getByTestId('spoti-card');
    await user.click(card);

    expect(push).toHaveBeenCalledWith({
      name: 'ItemDetails',
      params: {
        id: albumInfo.id,
        type: 'album',
      },
    });
  });
});
