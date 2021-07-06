<template>
  <div class="toaster">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .toaster {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 300px;
    height: 60px;
    border-radius: 20px;
    background-color: $color-spotify-dark-green;
    background: linear-gradient(19deg, $color-spotify-dark-green 0%, $color-spotify-light-green 100%);
    color: #fff;
    font-size: 16px;
    padding: 10px;
    z-index: 999;
  }
</style>