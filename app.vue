<script setup lang="ts">
import {SpeedInsights} from "@vercel/speed-insights/vue";
import {useSettingsStore} from "~/stores/settings";

const settingsStore = useSettingsStore();

await settingsStore.init();
</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <SpeedInsights/>
</template>
