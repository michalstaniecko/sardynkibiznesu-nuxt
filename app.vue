<script setup lang="ts">
import {SpeedInsights} from "@vercel/speed-insights/vue";

</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <SpeedInsights/>
</template>
