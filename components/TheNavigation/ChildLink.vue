<script setup lang="ts">
const props = defineProps<{
  label: string;
  url: string;
  ariaCurrent?: string;
  target?: string;
  children?: any;
}>();
</script>

<template>
  <RouterLink
    :to="props.url"
    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >{{ props.label }}</RouterLink
  >
</template>

<style scoped></style>
