<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

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

const router = useRouter();

const messages = computed(
  () => GlobalErrors[props.errorCode] ?? GlobalErrors.DEFAULT_ERROR,
);

</script>

<template>
  <div class="flex flex-col h-[80vh]">
    <div class="flex-1 flex justify-center items-center">
      <div class="flex flex-col items-center p-4 max-w-lg">
        <BrokenRecord
          :src="BrokenRecord"
          class="w-auto h-64 ml-[10%]"
          alt="Broken record image"
        />
        <div class="flex flex-col justify-center items-center mt-5 text-center max-w-xs">
          <h3 class="mb-2 text-2xl font-bold">
            {{ $t(messages.mainErrorMsg) }}
          </h3>
          <p
            v-if="messages.subErrorMsg"
            class="mb-8 font-normal text-lg"
          >
            {{ $t(messages.subErrorMsg) }}
          </p>
          <button
            type="button"
            class="back-button !py-3 !px-8 font-bold"
            @click="router.push({ name: 'search' })"
          >
            {{ $t(messages.btnMsg) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
