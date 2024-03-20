<script setup lang="ts">
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div
      class="skeleton w-full max-w-80 !h-80 mb-14 rounded-2xl"
      data-testid="skeleton-shape"
    />
    <div class="w-3/4 max-w-3xl">
      <div class="w-full justify-center flex gap-6 mb-8">
        <div
          class="skeleton w-1/4 !h-10 rounded-full"
          data-testid="skeleton-pill"
        />
        <div
          class="skeleton w-1/3 !h-10 rounded-full"
          data-testid="skeleton-pill"
        />
        <div
          class="skeleton w-1/6 !h-10 rounded-full"
          data-testid="skeleton-pill"
        />
      </div>
      <div
        v-for="n in 5"
        :key="n"
        class="lines-grid mb-4"
        data-testid="skeleton-line"
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
.lines-grid {
  @apply grid justify-start;
  grid-template-columns: 12% 1fr 10%;
}

</style>
