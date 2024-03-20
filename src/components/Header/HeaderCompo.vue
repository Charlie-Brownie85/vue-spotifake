<script setup lang="ts">
import { watch } from 'vue';

import AppLogo from '@/assets/icons/app-logo.svg';
import { locales } from '@/config/locales';

import i18n from '@/i18n';

const { locale } = i18n.global;

// @ts-ignore
watch(locale, (newValue: string, oldValue: string) => {
  if (newValue === oldValue) return;
  localStorage.setItem('locale', newValue);
});
</script>

<template>
  <header class="grid h-[3.75rem] lg:h-20 px-2 lg:px-5 mb-5">
    <div class="pl-[6.25rem] flex items-center justify-center">
      <RouterLink
        to="/"
        class="flex items-center gap-3 lg:gap-5"
      >
        <AppLogo
          :src="AppLogo"
          class="w-auto h-8 lg:h-12"
          alt="Spotifake logo"
        />
        <h1 class="text-3xl lg:text-4xl font-bold font-body upper">
          Spotifake
        </h1>
      </RouterLink>
    </div>
    <div class="flex justify-between items-center gap-2">
      <SelectComponent
        v-model="locale"
        :options="locales"
        class="w-20"
      />
      <DarkMode />
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  grid-template-columns: 1fr 7rem;
}
</style>
