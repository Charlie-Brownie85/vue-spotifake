<script setup lang="ts">
const props = withDefaults(defineProps<{
  infinite?: boolean;
}>(), {
  infinite: false,
});

const itemsNumber = props.infinite ? 12 : 5;
</script>

<template>
  <div class="mb-6">
    <div class="flex justify-between mb-2">
      <span
        class="skeleton rounded-sm w-32"
        data-testid="skeleton-pill"
      />
      <span
        class="skeleton rounded-sm w-20"
        data-testid="skeleton-pill"
      />
    </div>
    <ul
      class="skeleton-list"
      :class="{ 'infinite': props.infinite }"
      data-testid="skeleton-list"
    >
      <li
        v-for="item in itemsNumber"
        :key="item"
        class="block skeleton w-full !h-56 rounded-lg"
      />
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.skeleton-list {
  @apply grid gap-3;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

&:not(.infinite) {
  grid-auto-flow: column;
  overflow-x: hidden;

  li:nth-of-type(n + 4) {
    display: none;
  }
}
}

@media screen(lg) {
  .skeleton-list {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));

    &:not(.infinite) li:nth-of-type(n + 4) {
      display: block;
    }
  }
}
</style>
