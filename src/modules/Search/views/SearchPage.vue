<script setup lang="ts">
import { initAuth } from '@/composables/useAuth';

await initAuth();
</script>

<template>
  <div>
    <h1 class="text-2xl text-base-900 font-bold">
      Welcome to search view!
    </h1>
  </div>
</template>

<style lang="postcss" scoped>

</style>
