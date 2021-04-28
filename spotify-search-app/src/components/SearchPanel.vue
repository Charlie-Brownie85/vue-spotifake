<template>
  <div class="container">
    <div class="search__controls">
      <div class="search__searchbox">
        <input
          v-model="searchTerm"
          @input="performSearch"
          type="text"
          name="searchbox"
          id="searchbox"
        />
      </div>
    </div>
    <div v-if="noResults" class="search__message">
      <p>{{ searchMessage }}</p>
    </div>
    <div v-else class="search__results">
      <div v-if="thereAreartistResults" class="search__results-column">
        <h3>Artists</h3>
        <SpotifyCard
          v-for="artist in artistResults"
          :key="artist.id"
          :cardInfo="artist"
        />
      </div>
      <div v-if="thereAreTrackResults" class="search__results-column">
        <h3>Songs</h3>
        <SpotifyCard
          v-for="track in trackResults"
          :key="track.id"
          :cardInfo="track"
        />
      </div>
      <div v-if="thereAreAlbumResults" class="search__results-column">
        <h3>Albums</h3>
        <SpotifyCard
          v-for="album in albumResults"
          :key="album.id"
          :cardInfo="album"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import SpotifyCard from './SpotifyCard';

  export default {
    components: {
      SpotifyCard,
    },
    data() {
      return {
        searchTerm: '',
        filters: ['artist', 'track', 'album'],
      };
    },
    computed: {
      ...mapGetters(['searchStatus', 'albumResults', 'artistResults', 'trackResults']),
      thereAreAlbumResults() {
        return this.albumResults && this.albumResults.length > 0;
      },
      thereAreartistResults() {
        return this.artistResults && this.artistResults.length > 0;
      },
      thereAreTrackResults() {
        return this.trackResults && this.trackResults.length > 0;
      },
      noResults() {
        return (
          this.searchStatus !== 'SEARCHING' &&
          !this.thereAreAlbumResults &&
          !this.thereAreartistResults &&
          !this.thereAreTrackResults
        );
      },
      searchMessage() {
        return this.searchTerm === ''
          ? 'Type something to start searching'
          : '😰 Oops! No results found...';
      },
    },
    methods: {
      ...mapActions(['search', 'clearResults']),
      performSearch() {
        if (this.searchTerm !== '') {
          const query = { searchTerm: this.searchTerm, type: this.filters };
          this.search(query);
          console.log('albums');
          console.log(this.albumResults);
          console.log('artists');
          console.log(this.artistResults);
          console.log('tracks');
          console.log(this.trackResults);
        } else {
          this.clearResults();
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  $result-items-spacing: 20px;

  .container {
    padding: var(--container-padding);
    display: grid;
    height: calc(100vh - var(--header-height));
    // height: 100%;

    grid-template-rows: 10% 90%;
    grid-template-areas:
      'search'
      'results';
    overflow: hidden;
  }

  .search {
    &__controls {
      grid-area: search;
    }

    &__searchbox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__results {
      --search-results-grid-column-scheme: 1;
      --search-results-grid-row-scheme: repeat(3, 1fr);
      --column-gap: normal;
      --row-gap: 100px;

      grid-area: results;
      display: grid;
      grid-template-rows: var(--search-results-grid-row-scheme);
      column-gap: var(--column-gap);
      row-gap: var(--row-gap);
      overflow-y: auto;
      grid-template-columns: var(--search-results-grid-column-scheme);

      @media only screen and (min-width: map-get($breakpoints, 'lg')) {
        --search-results-grid-column-scheme: repeat(auto-fit, minmax(100px, 30%));
        --search-results-grid-row-scheme: 1fr;
        --column-gap: 3%;
        --row-gap: normal;
      }
    }

    &__results-column {
      h3 {
        color: $color-white;
        font-weight: bold;
        font-size: 1.1rem;
        text-align: left;
        margin-bottom: 1.7rem;
        position: relative;

        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 1px;
          background-color: $color-spotify-dark-grey;
        }
      }

      > *:not(:last-of-type) {
        margin-bottom: $result-items-spacing;
      }
    }

    &__message {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 2rem;
      }
    }
  }
</style>