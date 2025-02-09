<script setup lang="ts">
onMounted(() => {
  useFlowbite((flowbite) => {
    flowbite.initFlowbite();
  });
});
</script>

<template>
  <div>
    <TheHeader />
    <div class="grid lg:grid-cols-6 gap-8 max-w-screen-xxl mx-auto px-5 py-10">
      <div class="lg:col-start-2 lg:col-span-4">
        <slot />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
