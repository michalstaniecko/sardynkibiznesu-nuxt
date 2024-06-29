<script setup lang="ts">
import type { CategoryProps } from "~/@types/categories";

const { categories } = defineProps<{
  categories: { nodes: CategoryProps[] };
}>();

const category = categories.nodes[0];
</script>

<template>
  <NuxtLink :to="category.uri">
    {{ category.name }}
  </NuxtLink>
</template>

<style scoped></style>
