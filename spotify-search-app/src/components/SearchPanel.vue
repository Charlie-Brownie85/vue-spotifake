<template>
  <div class="wrapper">
    <input @input="performSearch" type="text" name="searchbox" id="searchbox">
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      filters: ['artist', 'track', 'album']
    }
  },
  methods: {
    ...mapActions(['search', 'clearResults']),
    performSearch(e) {
      const searchTerm = e.target.value;
      if (searchTerm !== '') {
        const query = { searchTerm, type: this.filters };
        this.search(query);
      } else {
        this.clearResults();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>