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
    ...mapActions({
      search: 'search'
    }),
    performSearch(e) {
      const searchTerm = e.target.value;
      const query = { searchTerm, type: this.filters };
      this.search(query);
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