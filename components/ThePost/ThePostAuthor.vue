<script setup lang="ts">
defineProps<{
  author: {
    name: string;
    uri: string;
  };
}>();
</script>

<template>
  Autor <NuxtLink :to="author.uri">{{ author.name }} </NuxtLink>
</template>

<style scoped></style>
