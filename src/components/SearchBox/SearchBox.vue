<script setup lang="ts">
import { computed } from 'vue';

import { useDark } from '@vueuse/core';

const model = defineModel<string>();

function clear() {
  model.value = '';
}

const isDark = useDark({ disableTransition: false });

const fillColor = computed(() => (isDark.value ? '#F2F2F2' : '#212121'));
</script>

<template>
  <div class="searchbox">
    <SVGIcon
      name="search"
      :color="fillColor"
      class="w-5 h-5 absolute block top-1/2 left-[0.625rem] -translate-y-1/2 pointer-events-none"
    />
    <input
      type="text"
      name="searchbox"
      id="searchbox"
      v-model="model"
      placeholder="Search for music"
      class="block outline-none shadow-none w-full h-full rounded-2xl px-10 text-lg font-body"
      autofocus
    >
    <div
      v-if="model !== ''"
      class="absolute w-[1.875rem] h-10 top-0 right-2 rounded-r-2xl rounded -b-2xl"
      @click="clear"
    >
      <SVGIcon
        name="close"
        :color="fillColor"
        class="w-[0.875rem] h-[0.875rem] absolute block top-1/2 right-[0.625rem] -translate-y-1/2 cursor-pointer -mt-[0.125rem]"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.searchbox {
  @apply relative h-10 w-full max-w-[31.25rem] overflow-hidden;
  @apply rounded-2xl border-2 border-transparent;
  @apply hover:border-base-800 dark:hover:border-base-400;

  &:has(:focus) {
    @apply border-base-800 dark:border-base-400;
  }
}

input {
  @apply bg-base-100 dark:bg-base-700;
}
</style>
