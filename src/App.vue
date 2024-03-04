<script setup lang="ts">
import { initAuth } from './composables/useAuth';

const authState = await initAuth();
console.log(authState);
</script>

<template>
  <main>
    <h1 class="text-xl text-black font-bold">
      Hello World
    </h1>
  </main>
</template>
