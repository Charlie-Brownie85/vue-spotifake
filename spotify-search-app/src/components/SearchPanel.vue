<template>
  <div class="container">
    <div class="search__controls">
      <div class="search__searchbox">
        <SearchBox v-model="searchTerm" @input="performSearch" />
      </div>
    </div>
    <div v-if="noResults" class="search__message">
      <p>{{ searchMessage }}</p>
    </div>
    <div v-else class="search__results">
      <div
        v-for="subResults in results"
        :key="subResults[0].type"
        class="search__results-column"
      >
        <div class="search__results-type">
          <h3>{{ getTypeTitle(subResults[0].type) }}</h3>
        </div>
        <SpotifyCard
          v-for="item in subResults.slice(0, maxResults)"
          :key="item.id"
          :cardInfo="item"
        />
        <div v-if="subResults.length > maxResults" class="search__see-more">
          <span>See more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import SpotifyCard from './SpotifyCard';
  import SearchBox from './SearchBox';

  export default {
    components: {
      SpotifyCard,
      SearchBox,
    },
    data() {
      return {
        searchTerm: '',
        filters: ['artist', 'track', 'album'], // Thinking on enabling search filters later
        maxResults: 8,
      };
    },
    computed: {
      ...mapGetters([
        'searchResults',
        'searchStatus',
        'albumResults',
        'artistResults',
        'trackResults',
      ]),
      results() {
        const results = this.searchResults;
        return Object.keys(results)
          .filter((type) => results[type].items.length > 0)
          .map((type) => results[type].items);
      },
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
        return this.searchStatus !== 'SEARCHING' && this.results.length < 1;
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
          const query = {
            searchTerm: this.searchTerm,
            type: this.filters,
          };
          this.search(query);
        } else {
          this.clearResults();
        }
      },
      getTypeTitle(type) {
        const newType = `${type === 'track' ? 'song' : type}s`;
        return newType.charAt(0).toUpperCase() + newType.slice(1);
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

    grid-template-rows: 10% 85%;
    row-gap: 5%;
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

      /* width */
      &::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: $color-spotify-black;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: $color-spotify-dark-grey;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: $color-spotify-light-grey;
      }
    }

    &__results-type {
      position: sticky;
      top: 0;
      background-color: $color-spotify-light-black;
      padding-bottom: 1.7rem;

      h3 {
        color: $color-white;
        font-weight: bold;
        font-size: 1.1rem;
        text-align: left;
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
    }

    &__results-column {
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

    &__see-more {
      text-align: right;

      span {
      cursor: pointer;
      color: $color-spotify-light-grey;
      text-decoration: none;

        &:hover {
          color: $color-white;
          text-decoration: underline;
        }
      }
    }
  }
</style>