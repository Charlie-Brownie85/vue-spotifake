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
      <ResultsPanel
        v-for="subResults in results"
        :key="subResults[0].type"
        :results="subResults"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import SearchBox from './SearchBox';
  import ResultsPanel from './ResultsPanel';

  export default {
    components: {
      SearchBox,
      ResultsPanel,
    },
    data() {
      return {
        searchTerm: '',
        filters: ['artist', 'track', 'album'], // Thinking on enabling search filters later
        maxResults: 8,
      };
    },
    computed: {
      ...mapGetters(['searchResults', 'searchStatus']),
      results() {
        const results = this.searchResults;
        return Object.keys(results)
          .filter((type) => results[type].items.length > 0)
          .map((type) => results[type].items);
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
    },
  };
</script>

<style lang="scss" scoped>
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