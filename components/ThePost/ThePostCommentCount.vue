<script setup lang="ts">
const { count = 0 } = defineProps<{
  count: number;
}>();
</script>

<template>
  <span> {{ count }} comments </span>
</template>

<style scoped></style>
