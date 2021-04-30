<template>
  <div class="grid-container">
    <div class="back">
      <div class="back__link" @click="goBack">
        <svg class="back__arrow">
          <use xlink:href="../assets/img/icons/arrow.svg#arrow" />
        </svg>
        <span>Go back</span>
      </div>
    </div>
    <div class="search__results">
      <ResultsPanel
        v-if="results && results.length > 0"
        :results="cumulativeResults"
        :showSeeMore="showSeeMore"
        v-on:see-more="performSearch"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import router from '../router';
  import ResultsPanel from '../components/ResultsPanel';

  export default {
    components: {
      ResultsPanel,
    },
    props: {
      type: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        cumulativeResults: [],
        offset: 0,
      };
    },
    computed: {
      ...mapGetters(['searchResults', 'searchTerm']),
      resultsType() {
        return `${this.type}s`;
      },
      results() {
        return this.searchResults[this.resultsType]?.items;
      },
      showSeeMore() {
        const typedResults = this.searchResults[this.resultsType];
        return typedResults
          ? typedResults.limit + typedResults.offset + typedResults.items.length <
              typedResults.total
          : false;
      },
    },
    methods: {
      ...mapActions(['search']),
      performSearch() {
        if (this.searchTerm === '') return;
        this.offset += this.cumulativeResults.length;
        const query = {
          searchTerm: this.searchTerm,
          type: this.type,
          offset: this.offset,
        };
        this.search(query);
      },
      goBack() {
        router.go(-1);
      },
    },
    watch: {
      results(newResults) {
        this.cumulativeResults = this.cumulativeResults.concat(newResults);
        this.offset = this.searchResults[this.resultsType].offset;
      },
    },
    mounted() {
      this.cumulativeResults = this.cumulativeResults.concat(this.results);
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/scss/_layout.scss';
  $arrow-icon-size: 24px;
  $arrow-margin-right: 8px;
  $arrow-margin-bottom: 2px;

  .back {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__link {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: $color-spotify-light-grey;
      text-decoration: none;
      font-size: 1.2rem;

      &:hover {
        color: $color-white;

        text-decoration: underline;
      }
    }

    &__arrow {
      fill: currentColor;
      width: $arrow-icon-size;
      height: $arrow-icon-size;
      margin-right: $arrow-margin-right;
      margin-bottom: $arrow-margin-bottom;
    }
  }
</style>