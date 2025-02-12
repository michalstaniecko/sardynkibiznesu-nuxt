<script setup lang="ts">
useHead({
  link: [
    {
      rel: "icon",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
