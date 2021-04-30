<template>
  <div class="searchbox">
    <svg class="searchbox__icon searchbox__icon--search">
      <use xlink:href="../assets/img/icons/search.svg#search" />
    </svg>
    <input
      v-model="content"
      placeholder="Search music"
      type="text"
      name="searchbox"
      id="searchbox"
      autofocus
    />
    <div v-if="value !== ''" class="searchbox__clear-wrapper" @click="clear">
      <svg class="searchbox__icon searchbox__icon--clear">
        <use xlink:href="../assets/img/icons/close.svg#close" />
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
      },
    },
    computed: {
      content: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        },
      },
    },
    methods: {
      clear() {
        this.content = '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  $border-radius: 20px;

  .searchbox {
    --input-height: 40px;
    --search-icon-size: calc(var(--input-height) / 2);
    --clear-icon-size: calc(var(--input-height) / 3);
    --input-font-size: 18px;
    --input-padding: 0 40px;

    position: relative;
    width: 100%;
    max-width: 500px;
    height: var(--input-height);
    overflow: hidden;
    border-radius: $border-radius;

    &__clear-wrapper {
      position: absolute;
      width: calc(var(--input-height) * 0.75);
      height: var(--input-height);
      top: 0;
      right: calc(var(--input-height) * 0.2);
      border-radius: 0 $border-radius $border-radius 0;
    }

    &__icon {
      position: absolute;
      display: block;
      width: var(--search-icon-size);
      height: var(--search-icon-size);
      top: 50%;

      &--search {
        pointer-events: none;
        transform: translateY(-50%);
        left: calc(var(--search-icon-size) / 2);
      }

      &--clear {
        cursor: unset;
        width: var(--clear-icon-size);
        height: var(--clear-icon-size);
        transform: translateY(-50%);
        right: calc(var(--input-height) / 4);
      }
    }

    input {
      display: block;
      outline: none;
      box-shadow: none;
      text-shadow: none;
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
      font-family: $font-family;
      font-size: var(--input-font-size);
      padding: var(--input-padding);
    }
  }
</style>