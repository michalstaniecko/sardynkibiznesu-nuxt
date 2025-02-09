<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";

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
  <SpeedInsights />
</template>
