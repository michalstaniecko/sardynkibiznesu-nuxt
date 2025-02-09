<script setup lang="ts">
onMounted(() => {
  useFlowbite((flowbite) => {
    flowbite.initFlowbite();
  });
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
