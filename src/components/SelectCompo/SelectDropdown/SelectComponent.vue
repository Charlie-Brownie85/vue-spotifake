<script setup lang="ts">
import {
  computed,
  ref,
  unref,
} from 'vue';

import find from 'lodash/find';

import { useElementBounding } from '@/composables/useElementBounding';

import i18n from '@/i18n';

export interface Props {
  modelValue?: boolean | string,
  options: Array<{ value: string, label: string}>,
  menuMaxHeight?: string,
  xPosition?: 'left' | 'right',
  yPosition?: 'top' | 'bottom',
  zIndexMenu?: number | string,
  menuWidth?: string,
  closeOnScroll?: boolean,
  placeholder?: string,
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  menuMaxHeight: '20rem',
  xPosition: 'left',
  yPosition: 'bottom',
  zIndexMenu: 9999,
  menuWidth: '',
  closeOnScroll: false,
  placeholder: '',
  disabled: false,
});

const emit = defineEmits(['open', 'close', 'update:modelValue']);

const { t } = i18n.global;

const menuOpen = ref(false);
const placeholderDef = computed(() => props.placeholder || t('Select'));
const trigger = ref(null);
const { width: triggerWidth } = useElementBounding(trigger);

const menuWidth = computed(() => {
  if (props.menuWidth) {
    return props.menuWidth;
  }
  return `${triggerWidth.value}px`;
});

const openMenuHandler = async () => {
  menuOpen.value = true;
  emit('open', true);
};

const closeMenuHandler = () => {
  menuOpen.value = false;
};

const selectedLabel = computed(() => {
  if (
    props.modelValue === null
        || props.modelValue === undefined
        || props.modelValue === ''
  ) {
    return unref(placeholderDef);
  }
  return find(props.options as { value: string, label: string}[], ['value', props.modelValue])?.label;
});
</script>

<template>
  <div
    :class="['custom-select', { disabled, opened: menuOpen }]"
    ref="trigger"
  >
    <SelectDropdown
      :x-position="xPosition"
      :y-position="yPosition"
      :z-index-menu="zIndexMenu"
      :close-on-scroll="closeOnScroll"
      @open="openMenuHandler"
      @close="closeMenuHandler"
    >
      <template #btn>
        <div
          class="custom-select__trigger"
        >
          <span class="custom-select__label">{{ selectedLabel }}</span>
          <SVGIcon
            name="chevron-down"
            color="currentColor"
            class="w-3 h-3 custom-select__icon"
          />
        </div>
      </template>
      <template #menu="{ closeMenu }">
        <ul
          class="custom-select__menu"
          :style="{ width: menuWidth, maxHeight: props.menuMaxHeight}"
        >
          <li
            v-for="option in props.options"
            :key="option.value"
            class="custom-select__item cursor-pointer"
            @click="() => { emit('update:modelValue', option.value); closeMenu(); }"
          >
            <span class="text-xs">{{ option.label }}</span>
          </li>
        </ul>
      </template>
    </SelectDropdown>
  </div>
</template>

<style lang="postcss" scoped>
.custom-select {
  @apply font-normal text-base;

  &__trigger {
    @apply flex items-center border border-transparent rounded-lg w-full cursor-pointer bg-base-400 dark:bg-base-700 space-x-4 py-2 px-3 text-base;
    &:hover {
      @apply shadow border-base-500;
    }
  }

  &__label {
    @apply flex-1 truncate min-w-0 text-xs select-none;
  }

  &__icon {
    @apply pointer-events-none;
    transition: transform 0.3s;
  }

  &.disabled {
    @apply pointer-events-none;
  }

  &.opened .custom-select {
    &__trigger{
      @apply border-base-700;
    }

    &__icon {
      transform: rotateX(180deg);
    }
  }
  &.disabled &__trigger {
    @apply bg-base-300 text-base-400 border-base-400;
  }

  &__menu {
    @apply bg-base-400 dark:bg-base-700 border border-base-500 dark:border-base-600 rounded-lg shadow overflow-y-auto;
  }

  &__item {
    @apply py-2 px-3;
    &:hover {
      @apply bg-base-500 dark:bg-base-600;
    }
  }
}
</style>
