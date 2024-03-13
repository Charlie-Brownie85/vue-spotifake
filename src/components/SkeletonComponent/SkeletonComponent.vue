<script setup lang="ts">
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="skeleton w-full max-w-80 !h-80 mb-14 rounded-2xl" />
    <div class="w-3/4 max-w-3xl">
      <div class="w-full justify-center flex gap-6 mb-8">
        <div class="skeleton w-1/4 !h-10 rounded-full" />
        <div class="skeleton w-1/3 !h-10 rounded-full" />
        <div class="skeleton w-1/6 !h-10 rounded-full" />
      </div>
      <div
        v-for="n in 5"
        :key="n"
        class="lines-grid mb-4"
      >
        <div
          class="skeleton rounded-sm"
          style="width: 50%;"
        />

        <div
          class="skeleton rounded-sm"
          :style="{ width: Math.random() * 100 + '%' }"
        />

        <div
          class="skeleton rounded-sm"
          style="width: 100%;"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.skeleton {
  display: block;
  @apply text-base-400 dark:text-base-800;
  background: linear-gradient(90deg, currentColor 0%, #b3b3b3 16.7%, currentColor 33.3%);
  background-size: 300%;
  animation: 1.8s shine linear infinite;
  height: 1.5em;
}

.lines-grid {
  @apply grid justify-start;
  grid-template-columns: 12% 1fr 10%;
}

@keyframes shine {
  0% {
    background-position: 50%;
  }
  40%, 100% {
    background-position: -80%;
  }
}
</style>
