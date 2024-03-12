import type {
  CategoryResults,
  Album,
  Artist,
  Track,
  Results,
  AlbumDetails,
} from '@/declarations/spoti.types';

export const tracks:CategoryResults<Track> = {
  href: 'https://api.spotify.com/v1/search?query=system+of+a+down&type=track&market=ES&offset=0&limit=20',
  items: [
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 210240,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107256',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN',
      },
      href: 'https://api.spotify.com/v1/tracks/2DlHlPMa4M17kufBvI2lEN',
      id: '2DlHlPMa4M17kufBvI2lEN',
      is_local: false,
      is_playable: true,
      name: 'Chop Suey!',
      popularity: 86,
      preview_url: 'https://p.scdn.co/mp3-preview/d536012652d7c99c472fe3811312ce3026f2196b?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 6,
      type: 'track',
      uri: 'spotify:track:2DlHlPMa4M17kufBvI2lEN',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 218933,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107262',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/0snQkGI5qnAmohLE7jTsTn',
      },
      href: 'https://api.spotify.com/v1/tracks/0snQkGI5qnAmohLE7jTsTn',
      id: '0snQkGI5qnAmohLE7jTsTn',
      is_local: false,
      is_playable: true,
      name: 'Toxicity',
      popularity: 84,
      preview_url: 'https://p.scdn.co/mp3-preview/d9b89161dacbb987b360417346591712c4023abd?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 12,
      type: 'track',
      uri: 'spotify:track:0snQkGI5qnAmohLE7jTsTn',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o',
        },
        href: 'https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o',
        id: '0cn6MHyx4YuZauaB7Pb66o',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Mezmerize',
        release_date: '2005-05-17',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:0cn6MHyx4YuZauaB7Pb66o',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 255466,
      explicit: true,
      external_ids: {
        isrc: 'USSM10501327',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/0EYOdF5FCkgOJJla8DI2Md',
      },
      href: 'https://api.spotify.com/v1/tracks/0EYOdF5FCkgOJJla8DI2Md',
      id: '0EYOdF5FCkgOJJla8DI2Md',
      is_local: false,
      is_playable: true,
      name: 'B.Y.O.B.',
      popularity: 79,
      preview_url: 'https://p.scdn.co/mp3-preview/e44858502911ca37f738aa6a4f79feba5e8d80e3?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 2,
      type: 'track',
      uri: 'spotify:track:0EYOdF5FCkgOJJla8DI2Md',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 235053,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107264',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4e9eGQYsOiBcftrWXwsVco',
      },
      href: 'https://api.spotify.com/v1/tracks/4e9eGQYsOiBcftrWXwsVco',
      id: '4e9eGQYsOiBcftrWXwsVco',
      is_local: false,
      is_playable: true,
      name: 'Aerials',
      popularity: 81,
      preview_url: 'https://p.scdn.co/mp3-preview/b39ec3629c47cbef5ebc57f864effc531cf4b62c?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 14,
      type: 'track',
      uri: 'spotify:track:4e9eGQYsOiBcftrWXwsVco',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1UeOoLhpWzpuM5cWQsbCXg',
        },
        href: 'https://api.spotify.com/v1/albums/1UeOoLhpWzpuM5cWQsbCXg',
        id: '1UeOoLhpWzpuM5cWQsbCXg',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273a2982eadad9b21912ed6c2e8',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02a2982eadad9b21912ed6c2e8',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851a2982eadad9b21912ed6c2e8',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Hypnotize',
        release_date: '2005-11-18',
        release_date_precision: 'day',
        total_tracks: 13,
        type: 'album',
        uri: 'spotify:album:1UeOoLhpWzpuM5cWQsbCXg',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 167906,
      explicit: false,
      external_ids: {
        isrc: 'USSM10505340',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4xBHZ2Mr0gCdFYXrPZuYXO',
      },
      href: 'https://api.spotify.com/v1/tracks/4xBHZ2Mr0gCdFYXrPZuYXO',
      id: '4xBHZ2Mr0gCdFYXrPZuYXO',
      is_local: false,
      is_playable: true,
      name: 'Lonely Day',
      popularity: 71,
      preview_url: 'https://p.scdn.co/mp3-preview/cd849f8aaa8cd13e7789dbd402864020d6e5319d?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 11,
      type: 'track',
      uri: 'spotify:track:4xBHZ2Mr0gCdFYXrPZuYXO',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3QxX3NbWyLlLG6lP1xveL3',
        },
        href: 'https://api.spotify.com/v1/albums/3QxX3NbWyLlLG6lP1xveL3',
        id: '3QxX3NbWyLlLG6lP1xveL3',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273f5e7b2e5adaa87430a3eccff',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02f5e7b2e5adaa87430a3eccff',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851f5e7b2e5adaa87430a3eccff',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Hypnotize',
        release_date: '2005-11-22',
        release_date_precision: 'day',
        total_tracks: 12,
        type: 'album',
        uri: 'spotify:album:3QxX3NbWyLlLG6lP1xveL3',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 167906,
      explicit: false,
      external_ids: {
        isrc: 'USSM10505340',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/1VNWaY3uNfoeWqb5U8x2QX',
      },
      href: 'https://api.spotify.com/v1/tracks/1VNWaY3uNfoeWqb5U8x2QX',
      id: '1VNWaY3uNfoeWqb5U8x2QX',
      is_local: false,
      is_playable: true,
      name: 'Lonely Day',
      popularity: 81,
      preview_url: 'https://p.scdn.co/mp3-preview/578e8890a2f1e3f61007394f18a76114eb121a8c?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 11,
      type: 'track',
      uri: 'spotify:track:1VNWaY3uNfoeWqb5U8x2QX',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3sSfjX4fhZonjyZ10x0l0f',
        },
        href: 'https://api.spotify.com/v1/albums/3sSfjX4fhZonjyZ10x0l0f',
        id: '3sSfjX4fhZonjyZ10x0l0f',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2732dc63e977bd5101072adcef6',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e022dc63e977bd5101072adcef6',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048512dc63e977bd5101072adcef6',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'System Of A Down',
        release_date: '1998',
        release_date_precision: 'year',
        total_tracks: 17,
        type: 'album',
        uri: 'spotify:album:3sSfjX4fhZonjyZ10x0l0f',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 153800,
      explicit: true,
      external_ids: {
        isrc: 'USSM19800759',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/31RTFPrB7wmYBhlkM2ILXG',
      },
      href: 'https://api.spotify.com/v1/tracks/31RTFPrB7wmYBhlkM2ILXG',
      id: '31RTFPrB7wmYBhlkM2ILXG',
      is_local: false,
      is_playable: true,
      name: 'Sugar',
      popularity: 77,
      preview_url: 'https://p.scdn.co/mp3-preview/353668c437c7af37eddef4abcb95a6c13e5f2e58?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 3,
      type: 'track',
      uri: 'spotify:track:31RTFPrB7wmYBhlkM2ILXG',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o',
        },
        href: 'https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o',
        id: '0cn6MHyx4YuZauaB7Pb66o',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Mezmerize',
        release_date: '2005-05-17',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:0cn6MHyx4YuZauaB7Pb66o',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 211333,
      explicit: true,
      external_ids: {
        isrc: 'USSM10501583',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/249Z7XT6mf8B2zuI0RaeS0',
      },
      href: 'https://api.spotify.com/v1/tracks/249Z7XT6mf8B2zuI0RaeS0',
      id: '249Z7XT6mf8B2zuI0RaeS0',
      is_local: false,
      is_playable: true,
      name: 'Violent Pornography',
      popularity: 72,
      preview_url: 'https://p.scdn.co/mp3-preview/c63827ff57a650891a5c8cae0b8c537c0484a0ee?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 7,
      type: 'track',
      uri: 'spotify:track:249Z7XT6mf8B2zuI0RaeS0',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6lA1sGw7eCv27bcpd5E0wT',
        },
        href: 'https://api.spotify.com/v1/albums/6lA1sGw7eCv27bcpd5E0wT',
        id: '6lA1sGw7eCv27bcpd5E0wT',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2737cf4c0d42c5b62c9deebdcd8',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e027cf4c0d42c5b62c9deebdcd8',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048517cf4c0d42c5b62c9deebdcd8',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Steal This Album!',
        release_date: '2002-11-26',
        release_date_precision: 'day',
        total_tracks: 16,
        type: 'album',
        uri: 'spotify:album:6lA1sGw7eCv27bcpd5E0wT',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 188600,
      explicit: true,
      external_ids: {
        isrc: 'USSM10213326',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/3RgDvs9Jpvn3kUuaTek1R5',
      },
      href: 'https://api.spotify.com/v1/tracks/3RgDvs9Jpvn3kUuaTek1R5',
      id: '3RgDvs9Jpvn3kUuaTek1R5',
      is_local: false,
      is_playable: true,
      name: 'I-E-A-I-A-I-O',
      popularity: 71,
      preview_url: 'https://p.scdn.co/mp3-preview/7afd4bae21b5a1b976ca9b9b79b10078d1462ca5?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 8,
      type: 'track',
      uri: 'spotify:track:3RgDvs9Jpvn3kUuaTek1R5',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3QxX3NbWyLlLG6lP1xveL3',
        },
        href: 'https://api.spotify.com/v1/albums/3QxX3NbWyLlLG6lP1xveL3',
        id: '3QxX3NbWyLlLG6lP1xveL3',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273f5e7b2e5adaa87430a3eccff',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02f5e7b2e5adaa87430a3eccff',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851f5e7b2e5adaa87430a3eccff',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Hypnotize',
        release_date: '2005-11-22',
        release_date_precision: 'day',
        total_tracks: 12,
        type: 'album',
        uri: 'spotify:album:3QxX3NbWyLlLG6lP1xveL3',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 171800,
      explicit: false,
      external_ids: {
        isrc: 'USSM10505338',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/5uMTA9SIe0sE4dnHHSHaYz',
      },
      href: 'https://api.spotify.com/v1/tracks/5uMTA9SIe0sE4dnHHSHaYz',
      id: '5uMTA9SIe0sE4dnHHSHaYz',
      is_local: false,
      is_playable: true,
      name: 'Vicinity Of Obscenity',
      popularity: 67,
      preview_url: 'https://p.scdn.co/mp3-preview/a4f9fb6fac8c16c5f7d8e1c3fd3a12b6025e7af8?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 9,
      type: 'track',
      uri: 'spotify:track:5uMTA9SIe0sE4dnHHSHaYz',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o',
        },
        href: 'https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o',
        id: '0cn6MHyx4YuZauaB7Pb66o',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Mezmerize',
        release_date: '2005-05-17',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:0cn6MHyx4YuZauaB7Pb66o',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 131706,
      explicit: true,
      external_ids: {
        isrc: 'USSM10500838',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/47EqCQZG5v4o0WFMufGf5S',
      },
      href: 'https://api.spotify.com/v1/tracks/47EqCQZG5v4o0WFMufGf5S',
      id: '47EqCQZG5v4o0WFMufGf5S',
      is_local: false,
      is_playable: true,
      name: 'Cigaro',
      popularity: 72,
      preview_url: 'https://p.scdn.co/mp3-preview/4b919c1da6c7ed11b8cc64a4346c9158b501370b?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 4,
      type: 'track',
      uri: 'spotify:track:47EqCQZG5v4o0WFMufGf5S',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o',
        },
        href: 'https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o',
        id: '0cn6MHyx4YuZauaB7Pb66o',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Mezmerize',
        release_date: '2005-05-17',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:0cn6MHyx4YuZauaB7Pb66o',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 249226,
      explicit: false,
      external_ids: {
        isrc: 'USSM10501581',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/41pOIT2t1rvr2Trg1HQChZ',
      },
      href: 'https://api.spotify.com/v1/tracks/41pOIT2t1rvr2Trg1HQChZ',
      id: '41pOIT2t1rvr2Trg1HQChZ',
      is_local: false,
      is_playable: true,
      name: 'Radio/Video',
      popularity: 71,
      preview_url: 'https://p.scdn.co/mp3-preview/0af8f5041b510a88dff4caaa3721ead0afbee57f?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 5,
      type: 'track',
      uri: 'spotify:track:41pOIT2t1rvr2Trg1HQChZ',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 201160,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107251',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/3AwLxSqo1jOOMpNsgxqRNE',
      },
      href: 'https://api.spotify.com/v1/tracks/3AwLxSqo1jOOMpNsgxqRNE',
      id: '3AwLxSqo1jOOMpNsgxqRNE',
      is_local: false,
      is_playable: true,
      name: 'Prison Song',
      popularity: 70,
      preview_url: 'https://p.scdn.co/mp3-preview/983dc780b6322e4c85a82e2c29393cca95390961?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:3AwLxSqo1jOOMpNsgxqRNE',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3sSfjX4fhZonjyZ10x0l0f',
        },
        href: 'https://api.spotify.com/v1/albums/3sSfjX4fhZonjyZ10x0l0f',
        id: '3sSfjX4fhZonjyZ10x0l0f',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2732dc63e977bd5101072adcef6',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e022dc63e977bd5101072adcef6',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048512dc63e977bd5101072adcef6',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'System Of A Down',
        release_date: '1998',
        release_date_precision: 'year',
        total_tracks: 17,
        type: 'album',
        uri: 'spotify:album:3sSfjX4fhZonjyZ10x0l0f',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 151733,
      explicit: true,
      external_ids: {
        isrc: 'USSM19800758',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/1qGmxIGEuBEkj7bft72Kh0',
      },
      href: 'https://api.spotify.com/v1/tracks/1qGmxIGEuBEkj7bft72Kh0',
      id: '1qGmxIGEuBEkj7bft72Kh0',
      is_local: false,
      is_playable: true,
      name: 'Suite-Pee',
      popularity: 68,
      preview_url: 'https://p.scdn.co/mp3-preview/b9c035911de9109b878afea3e1d295ddc01c88a2?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:1qGmxIGEuBEkj7bft72Kh0',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 176200,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107259',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6gCVA6ja6g0foIsWv0RuSZ',
      },
      href: 'https://api.spotify.com/v1/tracks/6gCVA6ja6g0foIsWv0RuSZ',
      id: '6gCVA6ja6g0foIsWv0RuSZ',
      is_local: false,
      is_playable: true,
      name: 'ATWA',
      popularity: 72,
      preview_url: 'https://p.scdn.co/mp3-preview/4db8fd8ccc9f7faff67c5bbdf690fb32283e61b2?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 9,
      type: 'track',
      uri: 'spotify:track:6gCVA6ja6g0foIsWv0RuSZ',
    },
    {
      album: {
        album_type: 'compilation',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
            },
            href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
            id: '0LyfQWJT6nXafLPZqxe9Of',
            name: 'Various Artists',
            type: 'artist',
            uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5PIDHpTCc6iT5WM2JZzFKu',
        },
        href: 'https://api.spotify.com/v1/albums/5PIDHpTCc6iT5WM2JZzFKu',
        id: '5PIDHpTCc6iT5WM2JZzFKu',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273086d14bc1c05200680d290c9',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02086d14bc1c05200680d290c9',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851086d14bc1c05200680d290c9',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Loud Rocks',
        release_date: '2000-09-05',
        release_date_precision: 'day',
        total_tracks: 13,
        type: 'album',
        uri: 'spotify:album:5PIDHpTCc6iT5WM2JZzFKu',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/34EP7KEpOjXcM2TCat1ISk',
          },
          href: 'https://api.spotify.com/v1/artists/34EP7KEpOjXcM2TCat1ISk',
          id: '34EP7KEpOjXcM2TCat1ISk',
          name: 'Wu-Tang Clan',
          type: 'artist',
          uri: 'spotify:artist:34EP7KEpOjXcM2TCat1ISk',
        },
      ],
      disc_number: 1,
      duration_ms: 160666,
      explicit: true,
      external_ids: {
        isrc: 'USLR50000432',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/44go3ZmDNtKdfCc15IseAx',
      },
      href: 'https://api.spotify.com/v1/tracks/44go3ZmDNtKdfCc15IseAx',
      id: '44go3ZmDNtKdfCc15IseAx',
      is_local: false,
      is_playable: true,
      name: 'Shame',
      popularity: 61,
      preview_url: 'https://p.scdn.co/mp3-preview/d3338bd13c4adc5d3822333f01b1bf2dc21f6c89?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:44go3ZmDNtKdfCc15IseAx',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o',
        },
        href: 'https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o',
        id: '0cn6MHyx4YuZauaB7Pb66o',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Mezmerize',
        release_date: '2005-05-17',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:0cn6MHyx4YuZauaB7Pb66o',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 200600,
      explicit: false,
      external_ids: {
        isrc: 'USSM10501584',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6y2DHyCYf6azhUfXmnuH6w',
      },
      href: 'https://api.spotify.com/v1/tracks/6y2DHyCYf6azhUfXmnuH6w',
      id: '6y2DHyCYf6azhUfXmnuH6w',
      is_local: false,
      is_playable: true,
      name: 'Question!',
      popularity: 69,
      preview_url: 'https://p.scdn.co/mp3-preview/a189b8d15429ff0d2180e7cee3791ea1028c44a5?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 8,
      type: 'track',
      uri: 'spotify:track:6y2DHyCYf6azhUfXmnuH6w',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/3sSfjX4fhZonjyZ10x0l0f',
        },
        href: 'https://api.spotify.com/v1/albums/3sSfjX4fhZonjyZ10x0l0f',
        id: '3sSfjX4fhZonjyZ10x0l0f',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2732dc63e977bd5101072adcef6',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e022dc63e977bd5101072adcef6',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048512dc63e977bd5101072adcef6',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'System Of A Down',
        release_date: '1998',
        release_date_precision: 'year',
        total_tracks: 17,
        type: 'album',
        uri: 'spotify:album:3sSfjX4fhZonjyZ10x0l0f',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 215440,
      explicit: false,
      external_ids: {
        isrc: 'USSM19800755',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4vAHXnJ5YWLq5hbIVzZS1h',
      },
      href: 'https://api.spotify.com/v1/tracks/4vAHXnJ5YWLq5hbIVzZS1h',
      id: '4vAHXnJ5YWLq5hbIVzZS1h',
      is_local: false,
      is_playable: true,
      name: 'Spiders',
      popularity: 71,
      preview_url: 'https://p.scdn.co/mp3-preview/0fb4d191b92d2ea141fc73cb7c3c7e62ac0d14aa?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 5,
      type: 'track',
      uri: 'spotify:track:4vAHXnJ5YWLq5hbIVzZS1h',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 174933,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107253',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/2SpGXD7EbexndFmmThrnsy',
      },
      href: 'https://api.spotify.com/v1/tracks/2SpGXD7EbexndFmmThrnsy',
      id: '2SpGXD7EbexndFmmThrnsy',
      is_local: false,
      is_playable: true,
      name: 'Deer Dance',
      popularity: 70,
      preview_url: 'https://p.scdn.co/mp3-preview/78039d7b8d0115a308c5d4943bf98ebc84e9f3e1?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 3,
      type: 'track',
      uri: 'spotify:track:2SpGXD7EbexndFmmThrnsy',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
            },
            href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
            id: '5eAWCfyUhZtHHtBdNk56l1',
            name: 'System Of A Down',
            type: 'artist',
            uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
        },
        href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
        id: '6jWde94ln40epKIQCd8XUh',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
            width: 64,
          },
        ],
        is_playable: true,
        name: 'Toxicity',
        release_date: '2001-09-04',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      disc_number: 1,
      duration_ms: 114226,
      explicit: false,
      external_ids: {
        isrc: 'USSM10107257',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6dr2T6DRymdT1jfSUxDgut',
      },
      href: 'https://api.spotify.com/v1/tracks/6dr2T6DRymdT1jfSUxDgut',
      id: '6dr2T6DRymdT1jfSUxDgut',
      is_local: false,
      is_playable: true,
      name: 'Bounce',
      popularity: 64,
      preview_url: 'https://p.scdn.co/mp3-preview/dd7ef0af46651a9cf65f80736be60f8b278048f6?cid=31d5f07a03494bc3b297415a3a562984',
      track_number: 7,
      type: 'track',
      uri: 'spotify:track:6dr2T6DRymdT1jfSUxDgut',
    },
  ],
  limit: 20,
  next: 'https://api.spotify.com/v1/search?query=system+of+a+down&type=track&market=ES&offset=20&limit=20',
  offset: 0,
  previous: null,
  total: 822,
};

export const artists:CategoryResults<Artist> = {
  href: 'https://api.spotify.com/v1/search?query=system+of+a+down&type=artist&market=ES&offset=0&limit=20',
  items: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
      },
      followers: {
        href: null,
        total: 10160725,
      },
      genres: [
        'alternative metal',
        'nu metal',
        'rap metal',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
      id: '5eAWCfyUhZtHHtBdNk56l1',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb60063d3451ade8f9fab397c2',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab6761610000517460063d3451ade8f9fab397c2',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f17860063d3451ade8f9fab397c2',
          width: 160,
        },
      ],
      name: 'System Of A Down',
      popularity: 79,
      type: 'artist',
      uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8',
      },
      followers: {
        href: null,
        total: 10651253,
      },
      genres: [
        'alternative metal',
        'nu metal',
        'rap metal',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8',
      id: '05fG473iIaoy82BF1aGhL8',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5ebff9f4de8c13f6f563acbfaf1',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174ff9f4de8c13f6f563acbfaf1',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178ff9f4de8c13f6f563acbfaf1',
          width: 160,
        },
      ],
      name: 'Slipknot',
      popularity: 77,
      type: 'artist',
      uri: 'spotify:artist:05fG473iIaoy82BF1aGhL8',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5AQh5FwZD24MjB31CFksLV',
      },
      followers: {
        href: null,
        total: 59,
      },
      genres: [],
      href: 'https://api.spotify.com/v1/artists/5AQh5FwZD24MjB31CFksLV',
      id: '5AQh5FwZD24MjB31CFksLV',
      images: [],
      name: 'Shavo (from System of a Down)',
      popularity: 0,
      type: 'artist',
      uri: 'spotify:artist:5AQh5FwZD24MjB31CFksLV',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2ZpwFriFFPaGFC4qYQQJ1i',
      },
      followers: {
        href: null,
        total: 27395,
      },
      genres: [
        'bouncy house',
        'dutch trance',
        'trance',
        'uplifting trance',
      ],
      href: 'https://api.spotify.com/v1/artists/2ZpwFriFFPaGFC4qYQQJ1i',
      id: '2ZpwFriFFPaGFC4qYQQJ1i',
      images: [
        {
          height: 1001,
          url: 'https://i.scdn.co/image/32e0109f358ba3e42a63b6f97900b98348bd4328',
          width: 1000,
        },
        {
          height: 641,
          url: 'https://i.scdn.co/image/ce549038a1cc4d3a4255cc650f3cd88091b7a121',
          width: 640,
        },
        {
          height: 200,
          url: 'https://i.scdn.co/image/4ac63d3cd04fdbd2d77525d0a5a5587616dcfaf0',
          width: 200,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ad4ff39964493e45037eb901bebd9770317c3431',
          width: 64,
        },
      ],
      name: 'System F',
      popularity: 42,
      type: 'artist',
      uri: 'spotify:artist:2ZpwFriFFPaGFC4qYQQJ1i',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3RNrq3jvMZxD9ZyoOZbQOD',
      },
      followers: {
        href: null,
        total: 7134401,
      },
      genres: [
        'alternative metal',
        'funk metal',
        'hard rock',
        'nu metal',
        'post-grunge',
        'rap metal',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/3RNrq3jvMZxD9ZyoOZbQOD',
      id: '3RNrq3jvMZxD9ZyoOZbQOD',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb29af2ffb6f4ddd6324f878bc',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab6761610000517429af2ffb6f4ddd6324f878bc',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f17829af2ffb6f4ddd6324f878bc',
          width: 160,
        },
      ],
      name: 'Korn',
      popularity: 75,
      type: 'artist',
      uri: 'spotify:artist:3RNrq3jvMZxD9ZyoOZbQOD',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5vbtZfRJjn2QLhPhtYpiqi',
      },
      followers: {
        href: null,
        total: 211384,
      },
      genres: [],
      href: 'https://api.spotify.com/v1/artists/5vbtZfRJjn2QLhPhtYpiqi',
      id: '5vbtZfRJjn2QLhPhtYpiqi',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb09c6c8687903b10b5571f53a',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab6761610000517409c6c8687903b10b5571f53a',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f17809c6c8687903b10b5571f53a',
          width: 160,
        },
      ],
      name: 'Daron Malakian and Scars On Broadway',
      popularity: 49,
      type: 'artist',
      uri: 'spotify:artist:5vbtZfRJjn2QLhPhtYpiqi',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/165ZgPlLkK7bf5bDoFc6Sb',
      },
      followers: {
        href: null,
        total: 5676322,
      },
      genres: [
        'alternative metal',
        'funk metal',
        'nu metal',
        'post-grunge',
        'rap metal',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/165ZgPlLkK7bf5bDoFc6Sb',
      id: '165ZgPlLkK7bf5bDoFc6Sb',
      images: [
        {
          height: 1006,
          url: 'https://i.scdn.co/image/4654955890cb62a6abe9daadfd2b3ecdee8036e4',
          width: 1000,
        },
        {
          height: 644,
          url: 'https://i.scdn.co/image/c8e241c3b7ddb2839be99acf9a1ad2d73f04b936',
          width: 640,
        },
        {
          height: 201,
          url: 'https://i.scdn.co/image/38532b2db9bc627567271da917855a59be788860',
          width: 200,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/67ab66b1154c3115005086d60853fc954717a2ea',
          width: 64,
        },
      ],
      name: 'Limp Bizkit',
      popularity: 75,
      type: 'artist',
      uri: 'spotify:artist:165ZgPlLkK7bf5bDoFc6Sb',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2qtARFvBzCjOuGbXFAF0iX',
      },
      followers: {
        href: null,
        total: 13341,
      },
      genres: [],
      href: 'https://api.spotify.com/v1/artists/2qtARFvBzCjOuGbXFAF0iX',
      id: '2qtARFvBzCjOuGbXFAF0iX',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb7d3b4e6fcc262fe5aa2835f0',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab676161000051747d3b4e6fcc262fe5aa2835f0',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f1787d3b4e6fcc262fe5aa2835f0',
          width: 160,
        },
      ],
      name: 'System Olympia',
      popularity: 32,
      type: 'artist',
      uri: 'spotify:artist:2qtARFvBzCjOuGbXFAF0iX',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
      },
      followers: {
        href: null,
        total: 24758609,
      },
      genres: [
        'alternative metal',
        'nu metal',
        'post-grunge',
        'rap metal',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
      id: '6XyY86QOPPrYVGvF9ch6wz',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb84a0dd74f21e8acce6a9fd49',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab6761610000517484a0dd74f21e8acce6a9fd49',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f17884a0dd74f21e8acce6a9fd49',
          width: 160,
        },
      ],
      name: 'Linkin Park',
      popularity: 85,
      type: 'artist',
      uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2JrTxbnRU8RGKyuyHE8SGP',
      },
      followers: {
        href: null,
        total: 27448,
      },
      genres: [
        'ambient house',
        'classic progressive house',
        'intelligent dance music',
      ],
      href: 'https://api.spotify.com/v1/artists/2JrTxbnRU8RGKyuyHE8SGP',
      id: '2JrTxbnRU8RGKyuyHE8SGP',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb7a43ee57cb6a9a0c9e2fbfa1',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab676161000051747a43ee57cb6a9a0c9e2fbfa1',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f1787a43ee57cb6a9a0c9e2fbfa1',
          width: 160,
        },
      ],
      name: 'System 7',
      popularity: 25,
      type: 'artist',
      uri: 'spotify:artist:2JrTxbnRU8RGKyuyHE8SGP',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2d0hyoQ5ynDBnkvAbJKORj',
      },
      followers: {
        href: null,
        total: 5798031,
      },
      genres: [
        'alternative metal',
        'alternative rock',
        'conscious hip hop',
        'funk metal',
        'hard rock',
        'nu metal',
        'political hip hop',
        'post-grunge',
        'rap metal',
        'rap rock',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/2d0hyoQ5ynDBnkvAbJKORj',
      id: '2d0hyoQ5ynDBnkvAbJKORj',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5ebda4bd2b213cae330e2a4a901',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174da4bd2b213cae330e2a4a901',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178da4bd2b213cae330e2a4a901',
          width: 160,
        },
      ],
      name: 'Rage Against The Machine',
      popularity: 70,
      type: 'artist',
      uri: 'spotify:artist:2d0hyoQ5ynDBnkvAbJKORj',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5CfCAv52QCxLv9bdlGIyUD',
      },
      followers: {
        href: null,
        total: 745,
      },
      genres: [],
      href: 'https://api.spotify.com/v1/artists/5CfCAv52QCxLv9bdlGIyUD',
      id: '5CfCAv52QCxLv9bdlGIyUD',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb817978e320bbadcdfb089bcb',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174817978e320bbadcdfb089bcb',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178817978e320bbadcdfb089bcb',
          width: 160,
        },
      ],
      name: 'System.Inc',
      popularity: 22,
      type: 'artist',
      uri: 'spotify:artist:5CfCAv52QCxLv9bdlGIyUD',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3TOqt5oJwL9BE2NG9MEwDa',
      },
      followers: {
        href: null,
        total: 6406903,
      },
      genres: [
        'alternative metal',
        'nu metal',
        'rap metal',
        'rock',
      ],
      href: 'https://api.spotify.com/v1/artists/3TOqt5oJwL9BE2NG9MEwDa',
      id: '3TOqt5oJwL9BE2NG9MEwDa',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb012addc95f5b2e7283f45446',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174012addc95f5b2e7283f45446',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178012addc95f5b2e7283f45446',
          width: 160,
        },
      ],
      name: 'Disturbed',
      popularity: 74,
      type: 'artist',
      uri: 'spotify:artist:3TOqt5oJwL9BE2NG9MEwDa',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/7otiKgm5qrgugGPiW4by20',
      },
      followers: {
        href: null,
        total: 2074,
      },
      genres: [
        'soca',
      ],
      href: 'https://api.spotify.com/v1/artists/7otiKgm5qrgugGPiW4by20',
      id: '7otiKgm5qrgugGPiW4by20',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb544b326fccd9bb5a8b3175a4',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174544b326fccd9bb5a8b3175a4',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178544b326fccd9bb5a8b3175a4',
          width: 160,
        },
      ],
      name: 'System32',
      popularity: 31,
      type: 'artist',
      uri: 'spotify:artist:7otiKgm5qrgugGPiW4by20',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB',
      },
      followers: {
        href: null,
        total: 26477495,
      },
      genres: [
        'hard rock',
        'metal',
        'old school thrash',
        'rock',
        'thrash metal',
      ],
      href: 'https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB',
      id: '2ye2Wgw4gimLv2eAKyk1NB',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb69ca98dd3083f1082d740e44',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab6761610000517469ca98dd3083f1082d740e44',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f17869ca98dd3083f1082d740e44',
          width: 160,
        },
      ],
      name: 'Metallica',
      popularity: 81,
      type: 'artist',
      uri: 'spotify:artist:2ye2Wgw4gimLv2eAKyk1NB',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/6Qzf4osFUb1YZBMynU2FmN',
      },
      followers: {
        href: null,
        total: 248,
      },
      genres: [],
      href: 'https://api.spotify.com/v1/artists/6Qzf4osFUb1YZBMynU2FmN',
      id: '6Qzf4osFUb1YZBMynU2FmN',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb2e1d53750a6407fbaf038321',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab676161000051742e1d53750a6407fbaf038321',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f1782e1d53750a6407fbaf038321',
          width: 160,
        },
      ],
      name: 'System of Fury',
      popularity: 22,
      type: 'artist',
      uri: 'spotify:artist:6Qzf4osFUb1YZBMynU2FmN',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/0BEI7i5sgUuivcfwXLzFmM',
      },
      followers: {
        href: null,
        total: 1006214,
      },
      genres: [
        'alternative metal',
        'nu metal',
      ],
      href: 'https://api.spotify.com/v1/artists/0BEI7i5sgUuivcfwXLzFmM',
      id: '0BEI7i5sgUuivcfwXLzFmM',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb5e304e5c1968ca518011749d',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab676161000051745e304e5c1968ca518011749d',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f1785e304e5c1968ca518011749d',
          width: 160,
        },
      ],
      name: 'Serj Tankian',
      popularity: 56,
      type: 'artist',
      uri: 'spotify:artist:0BEI7i5sgUuivcfwXLzFmM',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/08jahn2OvsxyyzSfquOkkx',
      },
      followers: {
        href: null,
        total: 2400,
      },
      genres: [
        'euphoric hardstyle',
      ],
      href: 'https://api.spotify.com/v1/artists/08jahn2OvsxyyzSfquOkkx',
      id: '08jahn2OvsxyyzSfquOkkx',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5ebe0db79ef3d99406300f349f4',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67616100005174e0db79ef3d99406300f349f4',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f178e0db79ef3d99406300f349f4',
          width: 160,
        },
      ],
      name: 'System of Loudness',
      popularity: 13,
      type: 'artist',
      uri: 'spotify:artist:08jahn2OvsxyyzSfquOkkx',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP',
      },
      followers: {
        href: null,
        total: 9276252,
      },
      genres: [
        'german metal',
        'industrial',
        'industrial metal',
        'industrial rock',
        'neue deutsche harte',
      ],
      href: 'https://api.spotify.com/v1/artists/6wWVKhxIU2cEi0K81v7HvP',
      id: '6wWVKhxIU2cEi0K81v7HvP',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb32845b1556f9dbdfe8ee6575',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab6761610000517432845b1556f9dbdfe8ee6575',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f17832845b1556f9dbdfe8ee6575',
          width: 160,
        },
      ],
      name: 'Rammstein',
      popularity: 78,
      type: 'artist',
      uri: 'spotify:artist:6wWVKhxIU2cEi0K81v7HvP',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2AlQBkucn6HkL30qRmyOmW',
      },
      followers: {
        href: null,
        total: 4410,
      },
      genres: [
        'uptempo hardcore',
      ],
      href: 'https://api.spotify.com/v1/artists/2AlQBkucn6HkL30qRmyOmW',
      id: '2AlQBkucn6HkL30qRmyOmW',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab6761610000e5eb6b4d090ac89be4939202f23d',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab676161000051746b4d090ac89be4939202f23d',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab6761610000f1786b4d090ac89be4939202f23d',
          width: 160,
        },
      ],
      name: 'System Overload',
      popularity: 26,
      type: 'artist',
      uri: 'spotify:artist:2AlQBkucn6HkL30qRmyOmW',
    },
  ],
  limit: 20,
  next: 'https://api.spotify.com/v1/search?query=system+of+a+down&type=artist&market=ES&offset=20&limit=20',
  offset: 0,
  previous: null,
  total: 48,
};

export const albums:CategoryResults<Album> = {
  href: 'https://api.spotify.com/v1/search?query=system+of+a+down&type=album&market=ES&offset=0&limit=20',
  items: [
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh',
      },
      href: 'https://api.spotify.com/v1/albums/6jWde94ln40epKIQCd8XUh',
      id: '6jWde94ln40epKIQCd8XUh',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Toxicity',
      release_date: '2001-09-04',
      release_date_precision: 'day',
      total_tracks: 15,
      type: 'album',
      uri: 'spotify:album:6jWde94ln40epKIQCd8XUh',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3sSfjX4fhZonjyZ10x0l0f',
      },
      href: 'https://api.spotify.com/v1/albums/3sSfjX4fhZonjyZ10x0l0f',
      id: '3sSfjX4fhZonjyZ10x0l0f',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2732dc63e977bd5101072adcef6',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e022dc63e977bd5101072adcef6',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048512dc63e977bd5101072adcef6',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'System Of A Down',
      release_date: '1998',
      release_date_precision: 'year',
      total_tracks: 17,
      type: 'album',
      uri: 'spotify:album:3sSfjX4fhZonjyZ10x0l0f',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o',
      },
      href: 'https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o',
      id: '0cn6MHyx4YuZauaB7Pb66o',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Mezmerize',
      release_date: '2005-05-17',
      release_date_precision: 'day',
      total_tracks: 11,
      type: 'album',
      uri: 'spotify:album:0cn6MHyx4YuZauaB7Pb66o',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/1UeOoLhpWzpuM5cWQsbCXg',
      },
      href: 'https://api.spotify.com/v1/albums/1UeOoLhpWzpuM5cWQsbCXg',
      id: '1UeOoLhpWzpuM5cWQsbCXg',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a2982eadad9b21912ed6c2e8',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a2982eadad9b21912ed6c2e8',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a2982eadad9b21912ed6c2e8',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Hypnotize',
      release_date: '2005-11-18',
      release_date_precision: 'day',
      total_tracks: 13,
      type: 'album',
      uri: 'spotify:album:1UeOoLhpWzpuM5cWQsbCXg',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3QxX3NbWyLlLG6lP1xveL3',
      },
      href: 'https://api.spotify.com/v1/albums/3QxX3NbWyLlLG6lP1xveL3',
      id: '3QxX3NbWyLlLG6lP1xveL3',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273f5e7b2e5adaa87430a3eccff',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02f5e7b2e5adaa87430a3eccff',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851f5e7b2e5adaa87430a3eccff',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Hypnotize',
      release_date: '2005-11-22',
      release_date_precision: 'day',
      total_tracks: 12,
      type: 'album',
      uri: 'spotify:album:3QxX3NbWyLlLG6lP1xveL3',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6lA1sGw7eCv27bcpd5E0wT',
      },
      href: 'https://api.spotify.com/v1/albums/6lA1sGw7eCv27bcpd5E0wT',
      id: '6lA1sGw7eCv27bcpd5E0wT',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2737cf4c0d42c5b62c9deebdcd8',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e027cf4c0d42c5b62c9deebdcd8',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048517cf4c0d42c5b62c9deebdcd8',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Steal This Album!',
      release_date: '2002-11-26',
      release_date_precision: 'day',
      total_tracks: 16,
      type: 'album',
      uri: 'spotify:album:6lA1sGw7eCv27bcpd5E0wT',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3kQs7B3H8jmWbzNecTrn1i',
      },
      href: 'https://api.spotify.com/v1/albums/3kQs7B3H8jmWbzNecTrn1i',
      id: '3kQs7B3H8jmWbzNecTrn1i',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27319362bd633b79c8fd88aa14c',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0219362bd633b79c8fd88aa14c',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485119362bd633b79c8fd88aa14c',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'System Of A Down',
      release_date: '1998-06-29',
      release_date_precision: 'day',
      total_tracks: 13,
      type: 'album',
      uri: 'spotify:album:3kQs7B3H8jmWbzNecTrn1i',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/7wHdo2ARw22e933IOeebSY',
          },
          href: 'https://api.spotify.com/v1/artists/7wHdo2ARw22e933IOeebSY',
          id: '7wHdo2ARw22e933IOeebSY',
          name: 'Amelia Grey',
          type: 'artist',
          uri: 'spotify:artist:7wHdo2ARw22e933IOeebSY',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0vyY0jEYilQXGR4Et3EcAc',
      },
      href: 'https://api.spotify.com/v1/albums/0vyY0jEYilQXGR4Et3EcAc',
      id: '0vyY0jEYilQXGR4Et3EcAc',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2735ec6018400cdc3ed69961052',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e025ec6018400cdc3ed69961052',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048515ec6018400cdc3ed69961052',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'System of the Brown',
      release_date: '2022-11-11',
      release_date_precision: 'day',
      total_tracks: 4,
      type: 'album',
      uri: 'spotify:album:0vyY0jEYilQXGR4Et3EcAc',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/00OQIrRjQgZmacSnjK8L7M',
      },
      href: 'https://api.spotify.com/v1/albums/00OQIrRjQgZmacSnjK8L7M',
      id: '00OQIrRjQgZmacSnjK8L7M',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273ba00e990d1520a4cde41ce0c',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02ba00e990d1520a4cde41ce0c',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851ba00e990d1520a4cde41ce0c',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Protect The Land / Genocidal Humanoidz',
      release_date: '2020-11-06',
      release_date_precision: 'day',
      total_tracks: 2,
      type: 'album',
      uri: 'spotify:album:00OQIrRjQgZmacSnjK8L7M',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2ZpwFriFFPaGFC4qYQQJ1i',
          },
          href: 'https://api.spotify.com/v1/artists/2ZpwFriFFPaGFC4qYQQJ1i',
          id: '2ZpwFriFFPaGFC4qYQQJ1i',
          name: 'System F',
          type: 'artist',
          uri: 'spotify:artist:2ZpwFriFFPaGFC4qYQQJ1i',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/0Wd7GMaUkqotsEb1RCYx2V',
      },
      href: 'https://api.spotify.com/v1/albums/0Wd7GMaUkqotsEb1RCYx2V',
      id: '0Wd7GMaUkqotsEb1RCYx2V',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273ec7601524bdeefaaa772c44e',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02ec7601524bdeefaaa772c44e',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851ec7601524bdeefaaa772c44e',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Out Of The Blue (Remastered)',
      release_date: '2010-02-22',
      release_date_precision: 'day',
      total_tracks: 22,
      type: 'album',
      uri: 'spotify:album:0Wd7GMaUkqotsEb1RCYx2V',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6T2FD996HGKJ00rpuHHbu7',
      },
      href: 'https://api.spotify.com/v1/albums/6T2FD996HGKJ00rpuHHbu7',
      id: '6T2FD996HGKJ00rpuHHbu7',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273c54b9260b13a275c546fb534',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02c54b9260b13a275c546fb534',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851c54b9260b13a275c546fb534',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Vicinity Of Obscenity/Lonely Day',
      release_date: '2006-05-29',
      release_date_precision: 'day',
      total_tracks: 5,
      type: 'album',
      uri: 'spotify:album:6T2FD996HGKJ00rpuHHbu7',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/4T0mAffZnPKUW2QTcSX5zG',
      },
      href: 'https://api.spotify.com/v1/albums/4T0mAffZnPKUW2QTcSX5zG',
      id: '4T0mAffZnPKUW2QTcSX5zG',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273ffffd390ca4b699c8702840e',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02ffffd390ca4b699c8702840e',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851ffffd390ca4b699c8702840e',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'System Of A Down',
      release_date: '1998-06-30',
      release_date_precision: 'day',
      total_tracks: 13,
      type: 'album',
      uri: 'spotify:album:4T0mAffZnPKUW2QTcSX5zG',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/4GObQJaZ0bAHb2mXSKA07P',
      },
      href: 'https://api.spotify.com/v1/albums/4GObQJaZ0bAHb2mXSKA07P',
      id: '4GObQJaZ0bAHb2mXSKA07P',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273d1cc54539b591b5c6866a101',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02d1cc54539b591b5c6866a101',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851d1cc54539b591b5c6866a101',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Mezmerize',
      release_date: '2005-05-17',
      release_date_precision: 'day',
      total_tracks: 11,
      type: 'album',
      uri: 'spotify:album:4GObQJaZ0bAHb2mXSKA07P',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/7p5mnxLTjbvs4kInkK8za9',
      },
      href: 'https://api.spotify.com/v1/albums/7p5mnxLTjbvs4kInkK8za9',
      id: '7p5mnxLTjbvs4kInkK8za9',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2738fc454734a3d19585bc12dd1',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e028fc454734a3d19585bc12dd1',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048518fc454734a3d19585bc12dd1',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'System Of A Down',
      release_date: '1998-06-30',
      release_date_precision: 'day',
      total_tracks: 13,
      type: 'album',
      uri: 'spotify:album:7p5mnxLTjbvs4kInkK8za9',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/41CBKm6FPUh28WPFj6UtNT',
      },
      href: 'https://api.spotify.com/v1/albums/41CBKm6FPUh28WPFj6UtNT',
      id: '41CBKm6FPUh28WPFj6UtNT',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2736ef784594c984b3cc84ace75',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e026ef784594c984b3cc84ace75',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048516ef784594c984b3cc84ace75',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Lonely Day',
      release_date: '2005-01-01',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:41CBKm6FPUh28WPFj6UtNT',
    },
    {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3qL21V8J9Zj8X00Qlgvj6l',
      },
      href: 'https://api.spotify.com/v1/albums/3qL21V8J9Zj8X00Qlgvj6l',
      id: '3qL21V8J9Zj8X00Qlgvj6l',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273645d6b9074c9a419f4413591',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02645d6b9074c9a419f4413591',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851645d6b9074c9a419f4413591',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Hypnotize',
      release_date: '2005-11-22',
      release_date_precision: 'day',
      total_tracks: 12,
      type: 'album',
      uri: 'spotify:album:3qL21V8J9Zj8X00Qlgvj6l',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6eHooNFxb0HVRmdWX3rCoZ',
      },
      href: 'https://api.spotify.com/v1/albums/6eHooNFxb0HVRmdWX3rCoZ',
      id: '6eHooNFxb0HVRmdWX3rCoZ',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27356ca82b0ad2e288fd6db7b8b',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0256ca82b0ad2e288fd6db7b8b',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485156ca82b0ad2e288fd6db7b8b',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Toxicity',
      release_date: '1999',
      release_date_precision: 'year',
      total_tracks: 3,
      type: 'album',
      uri: 'spotify:album:6eHooNFxb0HVRmdWX3rCoZ',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/6Ip8FS7vWT1uKkJSweANQK',
          },
          href: 'https://api.spotify.com/v1/artists/6Ip8FS7vWT1uKkJSweANQK',
          id: '6Ip8FS7vWT1uKkJSweANQK',
          name: 'Dave',
          type: 'artist',
          uri: 'spotify:artist:6Ip8FS7vWT1uKkJSweANQK',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp',
          },
          href: 'https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp',
          id: '3tVQdUvClmAT7URs9V3rsp',
          name: 'Wizkid',
          type: 'artist',
          uri: 'spotify:artist:3tVQdUvClmAT7URs9V3rsp',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/5ABN8cUVC3sZZQQLvGjiUM',
      },
      href: 'https://api.spotify.com/v1/albums/5ABN8cUVC3sZZQQLvGjiUM',
      id: '5ABN8cUVC3sZZQQLvGjiUM',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b2738e401f237540dd0cb3b592ea',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e028e401f237540dd0cb3b592ea',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d000048518e401f237540dd0cb3b592ea',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'System (feat. WizKid)',
      release_date: '2021-07-22',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:5ABN8cUVC3sZZQQLvGjiUM',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4GnbmF7PWjbWCIPjkTCLgT',
          },
          href: 'https://api.spotify.com/v1/artists/4GnbmF7PWjbWCIPjkTCLgT',
          id: '4GnbmF7PWjbWCIPjkTCLgT',
          name: 'Tony One',
          type: 'artist',
          uri: 'spotify:artist:4GnbmF7PWjbWCIPjkTCLgT',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1XDujSZXKFYhL3lb9HLHHY',
          },
          href: 'https://api.spotify.com/v1/artists/1XDujSZXKFYhL3lb9HLHHY',
          id: '1XDujSZXKFYhL3lb9HLHHY',
          name: 'Costel Biju',
          type: 'artist',
          uri: 'spotify:artist:1XDujSZXKFYhL3lb9HLHHY',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/7dFahz8soEhpAKNP5lkq1e',
      },
      href: 'https://api.spotify.com/v1/albums/7dFahz8soEhpAKNP5lkq1e',
      id: '7dFahz8soEhpAKNP5lkq1e',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273a2cf5a86d902f43a3f75f09a',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02a2cf5a86d902f43a3f75f09a',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851a2cf5a86d902f43a3f75f09a',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Sistem Otoman',
      release_date: '2024-01-12',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:7dFahz8soEhpAKNP5lkq1e',
    },
    {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1',
          },
          href: 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1',
          id: '5eAWCfyUhZtHHtBdNk56l1',
          name: 'System Of A Down',
          type: 'artist',
          uri: 'spotify:artist:5eAWCfyUhZtHHtBdNk56l1',
        },
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/4PRYj7Apw5PmfcIeY4Zkf7',
      },
      href: 'https://api.spotify.com/v1/albums/4PRYj7Apw5PmfcIeY4Zkf7',
      id: '4PRYj7Apw5PmfcIeY4Zkf7',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273ac57464cedcc7488d9281fce',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02ac57464cedcc7488d9281fce',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851ac57464cedcc7488d9281fce',
          width: 64,
        },
      ],
      is_playable: true,
      name: 'Chop Suey!',
      release_date: '2001-10-04',
      release_date_precision: 'day',
      total_tracks: 4,
      type: 'album',
      uri: 'spotify:album:4PRYj7Apw5PmfcIeY4Zkf7',
    },
  ],
  limit: 20,
  next: 'https://api.spotify.com/v1/search?query=system+of+a+down&type=album&market=ES&offset=20&limit=20',
  offset: 0,
  previous: null,
  total: 369,
};

export const results:Results = {
  albums,
  artists,
  tracks,
};

export const albumDetails:AlbumDetails = {
  album_type: 'album',
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
      },
      href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
      id: '4Z8W4fKeB5YxbusRsdQVPb',
      name: 'Radiohead',
      type: 'artist',
      uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
    },
  ],
  copyrights: [
    {
      text: '2003 XL Recordings Ltd',
      type: 'C',
    },
    {
      text: '2003 XL Recordings Ltd',
      type: 'P',
    },
  ],
  external_ids: {
    upc: '634904078560',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/album/5mzoI3VH0ZWk1pLFR6RoYy',
  },
  genres: [],
  href: 'https://api.spotify.com/v1/albums/5mzoI3VH0ZWk1pLFR6RoYy',
  id: '5mzoI3VH0ZWk1pLFR6RoYy',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2730da53e8f58e59f28a79c10c7',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e020da53e8f58e59f28a79c10c7',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d000048510da53e8f58e59f28a79c10c7',
      width: 64,
    },
  ],
  is_playable: true,
  label: 'XL Recordings',
  name: 'Hail To the Thief',
  popularity: 68,
  release_date: '2003-06-09',
  release_date_precision: 'day',
  total_tracks: 14,
  tracks: {
    href: 'https://api.spotify.com/v1/albums/5mzoI3VH0ZWk1pLFR6RoYy/tracks?offset=0&limit=50&market=es&locale=es,en-GB;q=0.9,en;q=0.8,la;q=0.7',
    items: [
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 199360,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/4xkcGfpM9RwB4IiQ7yx2dB',
        },
        href: 'https://api.spotify.com/v1/tracks/4xkcGfpM9RwB4IiQ7yx2dB',
        id: '4xkcGfpM9RwB4IiQ7yx2dB',
        is_local: false,
        is_playable: true,
        name: '2 + 2 = 5',
        preview_url: 'https://p.scdn.co/mp3-preview/a7c47e8b68c2795168b4ca2863abb89f9cda6833?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:4xkcGfpM9RwB4IiQ7yx2dB',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 259973,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/6MKWCO8g2W05UcaFyfQ6Cl',
        },
        href: 'https://api.spotify.com/v1/tracks/6MKWCO8g2W05UcaFyfQ6Cl',
        id: '6MKWCO8g2W05UcaFyfQ6Cl',
        is_local: false,
        is_playable: true,
        name: 'Sit Down. Stand Up',
        preview_url: 'https://p.scdn.co/mp3-preview/4646d85f96d462ccfa600a55fa41703ffc2a8699?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:6MKWCO8g2W05UcaFyfQ6Cl',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 258360,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/7tFsUfrmyBvLdvIByreecz',
        },
        href: 'https://api.spotify.com/v1/tracks/7tFsUfrmyBvLdvIByreecz',
        id: '7tFsUfrmyBvLdvIByreecz',
        is_local: false,
        is_playable: true,
        name: 'Sail To The Moon',
        preview_url: 'https://p.scdn.co/mp3-preview/858f7c324686e4a7b41a8648695b0f563d348b1f?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:7tFsUfrmyBvLdvIByreecz',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 322600,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/32dgxT0S7Tv5p83DgT6iCT',
        },
        href: 'https://api.spotify.com/v1/tracks/32dgxT0S7Tv5p83DgT6iCT',
        id: '32dgxT0S7Tv5p83DgT6iCT',
        is_local: false,
        is_playable: true,
        name: 'Backdrifts',
        preview_url: 'https://p.scdn.co/mp3-preview/aed699db5fffa69750e78587c46285f3e26466d9?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:32dgxT0S7Tv5p83DgT6iCT',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 201506,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/42BeMThJuzIQe1oQvhDwgl',
        },
        href: 'https://api.spotify.com/v1/tracks/42BeMThJuzIQe1oQvhDwgl',
        id: '42BeMThJuzIQe1oQvhDwgl',
        is_local: false,
        is_playable: true,
        name: 'Go To Sleep',
        preview_url: 'https://p.scdn.co/mp3-preview/d18de8a02d958b840b37d5b05a456f98485528c6?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 5,
        type: 'track',
        uri: 'spotify:track:42BeMThJuzIQe1oQvhDwgl',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 269293,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/2dDqsUr11Mv0qhXByNfbJx',
        },
        href: 'https://api.spotify.com/v1/tracks/2dDqsUr11Mv0qhXByNfbJx',
        id: '2dDqsUr11Mv0qhXByNfbJx',
        is_local: false,
        is_playable: true,
        name: 'Where I End and You Begin',
        preview_url: 'https://p.scdn.co/mp3-preview/cbac1f45d488896b642b1883f12ec0a1590da865?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 6,
        type: 'track',
        uri: 'spotify:track:2dDqsUr11Mv0qhXByNfbJx',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 296706,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/0dco6ZSO8vnL2fHRi10XSY',
        },
        href: 'https://api.spotify.com/v1/tracks/0dco6ZSO8vnL2fHRi10XSY',
        id: '0dco6ZSO8vnL2fHRi10XSY',
        is_local: false,
        is_playable: true,
        name: 'We Suck Young Blood',
        preview_url: 'https://p.scdn.co/mp3-preview/fecc1a47dfe0919f0a208121fbf84da5ddc3fe6f?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 7,
        type: 'track',
        uri: 'spotify:track:0dco6ZSO8vnL2fHRi10XSY',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 212026,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/3qhLTNphwAepIyHJF9ZMv0',
        },
        href: 'https://api.spotify.com/v1/tracks/3qhLTNphwAepIyHJF9ZMv0',
        id: '3qhLTNphwAepIyHJF9ZMv0',
        is_local: false,
        is_playable: true,
        name: 'The Gloaming',
        preview_url: 'https://p.scdn.co/mp3-preview/855b61bdb868877d26176eb7a71b09e7ad1e5f56?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 8,
        type: 'track',
        uri: 'spotify:track:3qhLTNphwAepIyHJF9ZMv0',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 323600,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/5h4y42RUKwYKYWgutNwvKP',
        },
        href: 'https://api.spotify.com/v1/tracks/5h4y42RUKwYKYWgutNwvKP',
        id: '5h4y42RUKwYKYWgutNwvKP',
        is_local: false,
        is_playable: true,
        name: 'There, There',
        preview_url: 'https://p.scdn.co/mp3-preview/296f13715e6be91ed6a8d1bec994293cc65814b1?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 9,
        type: 'track',
        uri: 'spotify:track:5h4y42RUKwYKYWgutNwvKP',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 119466,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/6GMGuW9ne8D3CvjkJoKJeg',
        },
        href: 'https://api.spotify.com/v1/tracks/6GMGuW9ne8D3CvjkJoKJeg',
        id: '6GMGuW9ne8D3CvjkJoKJeg',
        is_local: false,
        is_playable: true,
        name: 'I Will',
        preview_url: 'https://p.scdn.co/mp3-preview/72a3a995f47bb6252f2cd401ec2e6044985d06ff?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 10,
        type: 'track',
        uri: 'spotify:track:6GMGuW9ne8D3CvjkJoKJeg',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 297333,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/5kDi4uwQnHM920ElxNdzUO',
        },
        href: 'https://api.spotify.com/v1/tracks/5kDi4uwQnHM920ElxNdzUO',
        id: '5kDi4uwQnHM920ElxNdzUO',
        is_local: false,
        is_playable: true,
        name: 'A Punch Up at a Wedding',
        preview_url: 'https://p.scdn.co/mp3-preview/3a43d9f40f97906daf0fcccbb216577b05ba0075?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 11,
        type: 'track',
        uri: 'spotify:track:5kDi4uwQnHM920ElxNdzUO',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 232533,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/3MW7yZK3kKtjsmJpsvBwyf',
        },
        href: 'https://api.spotify.com/v1/tracks/3MW7yZK3kKtjsmJpsvBwyf',
        id: '3MW7yZK3kKtjsmJpsvBwyf',
        is_local: false,
        is_playable: true,
        name: 'Myxomatosis',
        preview_url: 'https://p.scdn.co/mp3-preview/0ba938bd316d2fe4f5aea004e19bb222a9ff68c7?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 12,
        type: 'track',
        uri: 'spotify:track:3MW7yZK3kKtjsmJpsvBwyf',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 201706,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/0mEOPRobXw671f2H68XzoB',
        },
        href: 'https://api.spotify.com/v1/tracks/0mEOPRobXw671f2H68XzoB',
        id: '0mEOPRobXw671f2H68XzoB',
        is_local: false,
        is_playable: true,
        name: 'Scatterbrain',
        preview_url: 'https://p.scdn.co/mp3-preview/d794894a4d8c0a1a2ee23464776598495d5dd1a6?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 13,
        type: 'track',
        uri: 'spotify:track:0mEOPRobXw671f2H68XzoB',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb',
            },
            href: 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',
            id: '4Z8W4fKeB5YxbusRsdQVPb',
            name: 'Radiohead',
            type: 'artist',
            uri: 'spotify:artist:4Z8W4fKeB5YxbusRsdQVPb',
          },
        ],
        disc_number: 1,
        duration_ms: 201333,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/3OHevW2cUT176DXWV0lHg9',
        },
        href: 'https://api.spotify.com/v1/tracks/3OHevW2cUT176DXWV0lHg9',
        id: '3OHevW2cUT176DXWV0lHg9',
        is_local: false,
        is_playable: true,
        name: 'A Wolf At the Door',
        preview_url: 'https://p.scdn.co/mp3-preview/3cbf6636f1b7cb78ae6f6110f5718a9f12f536dc?cid=31d5f07a03494bc3b297415a3a562984',
        track_number: 14,
        type: 'track',
        uri: 'spotify:track:3OHevW2cUT176DXWV0lHg9',
      },
    ],
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 14,
  },
  type: 'album',
  uri: 'spotify:album:5mzoI3VH0ZWk1pLFR6RoYy',
};
