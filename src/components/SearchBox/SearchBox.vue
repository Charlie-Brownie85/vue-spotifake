<script setup lang="ts">
const model = defineModel<string>();

function clear() {
  model.value = '';
}
</script>

<template>
  <div class="relative h-10 w-full max-w-[31.25rem] overflow-hidden rounded-2xl">
    <SVGIcon
      name="search"
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
        class="w-[0.875rem] h-[0.875rem] absolute block top-1/2 right-[0.625rem] -translate-y-1/2 cursor-pointer"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>

</style>
