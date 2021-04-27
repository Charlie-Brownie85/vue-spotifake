<template>
  <div class="container">
    <div class="search__controls">
      <div class="search__searchbox">
        <input
          @input="performSearch"
          type="text"
          name="searchbox"
          id="searchbox"
        />
      </div>
    </div>
    <div class="search__results"></div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        filters: ['artist', 'track', 'album'],
      }
    },
    methods: {
      ...mapActions(['search', 'clearResults']),
      performSearch(e) {
        const searchTerm = e.target.value
        if (searchTerm !== '') {
          const query = { searchTerm, type: this.filters }
          this.search(query)
        } else {
          this.clearResults()
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: var(--container-padding);
    display: grid;
    min-height: calc(100vh - var(--header-height));
    height: 100%;

    grid-template-rows: 10% 90%;
    grid-template-areas: 
      "search"
      "results";
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
      grid-area: results;
    }
  }
</style>