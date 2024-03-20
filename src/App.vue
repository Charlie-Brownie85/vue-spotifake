<script setup lang="ts">
</script>

<template>
  <main>
    <HeaderCompo />
    <router-view v-slot="{ Component }">
      <Transition mode="out-in">
        <component
          :is="Component"
          :key="$route.path"
        />
      </Transition>
    </router-view>
  </main>
</template>
