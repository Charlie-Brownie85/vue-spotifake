<script setup lang="ts">
import { computed } from 'vue';

import BrokenRecord from '@/assets/img/broken-record.svg';

import type { GlobalErrorName } from '@/declarations/common.types';
import { GlobalErrors } from '@/config/errors.config';

const props = withDefaults(
  defineProps<{
    errorCode?: GlobalErrorName;
  }>(),
  {
    errorCode: 'DEFAULT_ERROR',
  },
);

const messages = computed(
  () => GlobalErrors[props.errorCode] ?? GlobalErrors.DEFAULT_ERROR,
);

</script>

<template>
  <div class="fixed inset-0 flex flex-col bg-white z-50">
    <div class="flex-1 flex justify-center items-center">
      <div class="flex flex-col items-center p-4 max-w-lg">
        <img
          :src="BrokenRecord"
          class="w-auto h-14"
          alt="Broken record image"
        >
        <div class="mt-5 text-center max-w-xs">
          <h3 class="mb-1 text-xl font-medium">
            {{ $t(messages.mainErrorMsg) }}
          </h3>
          <p
            v-if="messages.subErrorMsg"
            class="mb-1 font-light"
          >
            {{ $t(messages.subErrorMsg) }}
          </p>
          <button
            type="button"
            class="btn btn-primary"
            @click="$router.push({ name: 'Search' })"
          >
            {{ $t(messages.btnMsg) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
