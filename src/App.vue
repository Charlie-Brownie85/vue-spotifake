<script setup lang="ts">
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense timeout="0">
              <component
                :is="Component"
                :key="$route.path"
              />
              <template #fallback>
                <div class="flex justify-center items-center h-screen">
                  <h2 class="text-xl text-base-900 font-bold">
                    Loading...
                  </h2>
                </div>
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </router-view>
  </main>
</template>
