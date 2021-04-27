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
    <div class="search__results">
      <div class="search__results-column">
        <h3>Artists</h3>
        <SpotifyCard
          v-for="artist in artistResults"
          :key="artist.id"
          :cardInfo="artist"
        />
      </div>
      <div class="search__results-column">
        <h3>Songs</h3>
        <SpotifyCard
          v-for="track in trackResults"
          :key="track.id"
          :cardInfo="track"
        />
      </div>
      <div class="search__results-column">
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
        filters: ['artist', 'track', 'album'],
      };
    },
    computed: {
      ...mapGetters(['albumResults', 'artistResults', 'trackResults']),
    },
    methods: {
      ...mapActions(['search', 'clearResults']),
      performSearch(e) {
        const searchTerm = e.target.value;
        if (searchTerm !== '') {
          const query = { searchTerm, type: this.filters };
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
    min-height: calc(100vh - var(--header-height));
    height: 100%;

    grid-template-rows: 10vh 90vh;
    grid-template-areas:
      'search'
      'results';
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
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      column-gap: 3%;
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
  }
</style>