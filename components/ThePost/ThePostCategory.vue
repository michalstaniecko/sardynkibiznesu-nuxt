<script setup lang="ts">
import type { Category } from "~/@types/categories";

const localePath = useLocalePath();

const { categoryId } = defineProps<{
  categoryId: number;
}>();

const { data: category, status } = await useFetch<Category>(
  `/api/categories/${categoryId}`,
  {
    server: false,
    method: "GET",
  },
);
</script>

<template>
  <template v-if="status !== 'success'">
    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
  </template>
  <template v-if="status === 'success'">
    /w
    <NuxtLink
      v-if="categoryId !== 0"
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
</template>

<style scoped></style>
