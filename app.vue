<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings";

const settingsStore = useSettingsStore();

await settingsStore.init();
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
