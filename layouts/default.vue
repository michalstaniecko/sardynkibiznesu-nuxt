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
    <div class="p-3">breadcrumbs</div>
    <div class="layout layout-default">
      <div class="layout__content">
        <slot />
      </div>
      <div class="layout__sidebar">
        <TheSidebar />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
