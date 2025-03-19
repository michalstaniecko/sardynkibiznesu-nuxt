<script setup lang="ts">
useHead({
  link: [
    {
      rel: "icon",
      href: "/favicon.png",
    },
  ],
  meta: [
    {
      name: "charset",
      content: "utf-8",
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
