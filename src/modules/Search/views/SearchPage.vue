<script setup lang="ts">
import { ref } from 'vue';

import { initAuth } from '@/composables/useAuth';

const searchTerm = ref('');

await initAuth();
</script>

<template>
  <div>
    <h1 class="text-2xl text-base-900 font-bold">
      Welcome to search view!
    </h1>
  </div>
  <SearchBox v-model="searchTerm" />
</template>

<style lang="postcss" scoped>

</style>
