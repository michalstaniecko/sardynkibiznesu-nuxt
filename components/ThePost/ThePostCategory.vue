<script setup lang="ts">
import type { Category } from "~/@types/categories";

const localePath = useLocalePath();

const { category } = defineProps<{
  category: Category;
}>();
</script>

<template>
  /w
  <NuxtLink
    :to="
      localePath({
        name: 'categories-category',
        params: {
          category: category?.slug,
        },
      })
    "
  >
    {{ category?.name }}
  </NuxtLink>
</template>

<style scoped></style>
