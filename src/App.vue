<script setup lang="ts">
</script>

<template>
  <main>
    <div class="flex justify-end">
      <DarkMode />
    </div>
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
