<template>
  <div class="btn">
    <span class="btn__text">
      <slot>Login</slot>
    </span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  $btn-border-radius: 500px;
  $btn-padding: 11px 32px 9px;
  $btn-font-size: 14px;

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $color-white;
    background-color: $color-spotify-green;
    cursor: pointer;
    border-width: 0;
    border-radius: $btn-border-radius;
    padding: $btn-padding;
    line-height: 1;

    &:hover:not(.btn--disabled) {
      background-color: $color-spotify-light-green;
    }

    &__text {
      text-transform: uppercase;
      font-size: $btn-font-size;
      font-weight: bold;
      user-select: none;
    }
  }
</style>