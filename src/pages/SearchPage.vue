<template>
  <div class="grid-container">
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
        :results="subResults.slice(0, maxResults)"
        :showSeeMore="subResults.length > maxResults"
        v-on:see-more="seeMore"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import debounce from 'lodash.debounce';
  import SearchBox from '../components/SearchBox';
  import ResultsPanel from '../components/ResultsPanel';
  import router from '../router';

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
      performSearch: debounce( function() {
        if (this.searchTerm !== '') {
          const query = {
            searchTerm: this.searchTerm,
            type: this.filters.join(','),
          };
          this.search(query);
        } else {
          this.clearResults();
        }
      }, 200),
      seeMore(type) {
        router.push({ name: 'results', params: { type } });
      }
    },
    mounted() {
      if(this.$store.getters.searchTerm && this.searchResults) {
        this.searchTerm = this.$store.getters.searchTerm;
        this.performSearch();
      } 
    }
  };
</script>

<style lang="scss" scoped>
@import '../assets/styles/scss/_layout.scss';

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