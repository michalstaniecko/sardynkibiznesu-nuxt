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
    :target="props.target"
    :to="props.url"
    class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
    aria-current="page"
    >{{ props.label }}
  </RouterLink>
</template>

<style scoped></style>
