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

export type SimplifiedTrack = {
  artists: Array<SimplifiedArtist>,
  available_markets: Array<string>,
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_urls: {
    spotify: string,
  },
  href: string,
  id: string,
  is_playable: boolean,
  linked_from: {
    external_urls: {
      spotify: string,
    },
    href: string,
    id: string,
    type: string,
    uri: string,
  },
  restrictions: {
    reason: string,
  },
  name: string,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string,
  is_local: boolean,
}

export type Track = {
  album: {
    album_type: string,
    artists: Array<SimplifiedArtist>,
    available_markets?: Array<string>,
    external_urls: {
      spotify: string,
    },
    href: string,
    id: string,
    images: Array<Image>,
    is_playable?: boolean,
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string,
  },
  artists: Array<SimplifiedArtist>,
  available_markets?: Array<string>,
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
  is_playable?: boolean,
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
    href: string | null,
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
  available_markets?: Array<string>,
  external_urls: {
    spotify: string,
  },
  href: string,
  id: string,
  images: Array<Image>,
  is_playable?: boolean,
  name: string,
  release_date: string,
  release_date_precision: 'day' | 'month' | 'year',
  restrictions?: {
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
  next: string | null,
  offset: number,
  previous: string | null,
  total: number,
}

export type Results = {
  albums?: CategoryResults<Album>,
  artists?: CategoryResults<Artist>,
  tracks?: CategoryResults<Track>,
}

export type AlbumDetails = Album & {
  tracks: {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: Array<SimplifiedTrack>,
  },
  copyrights?: Array<Object>,
  genres: Array<string>,
  label: string,
  popularity: number,
}
