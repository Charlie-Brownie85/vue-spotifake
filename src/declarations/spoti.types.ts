export type Category = 'album' | 'artist' | 'track';

export type Image = {
  height: number,
  url: string,
  width: number,
}

export type SimplifiedArtist = {
  external_urls: {
    spotify: string,
  },
  href: string,
  id: string,
  name: string,
  type: string,
  uri: string,
}

export type Track = {
  album: {
    album_type: string,
    artists: Array<SimplifiedArtist>,
    available_markets: Array<string>,
    external_urls: {
      spotify: string,
    },
    href: string,
    id: string,
    images: Array<Image>,
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string,
  },
  artists: Array<SimplifiedArtist>,
  available_markets: Array<string>,
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: {
    isrc: string,
  },
  external_urls: {
    spotify: string,
  },
  href: string,
  id: string,
  is_local: boolean,
  name: string,
  popularity: number,
  preview_url: string,
  track_number: number,
  type: 'track',
  uri: string,
}

export type Artist = {
  external_urls: {
    spotify: string,
  },
  followers: {
    href: string,
    total: number,
  },
  genres: Array<string>,
  href: string,
  id: string,
  images: Array<Image>,
  name: string,
  popularity: number,
  type: 'artist',
  uri: string,
}

export type Album = {
  album_type: string,
  artists: Array<SimplifiedArtist>,
  available_markets: Array<string>,
  external_urls: {
    spotify: string,
  },
  href: string,
  id: string,
  images: Array<Image>,
  name: string,
  release_date: string,
  release_date_precision: 'day' | 'month' | 'year',
  restrictions: {
    reason: 'market' | 'product' | 'explicit',
  },
  total_tracks: number,
  type: 'album',
  uri: string,
}

export type CategoryResults<T extends Album | Artist | Track> = {
  href: string,
  items: Array<T>,
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number,
}

export type Results = {
  albums?: CategoryResults<Album>,
  artists?: CategoryResults<Artist>,
  tracks?: CategoryResults<Track>,
}
