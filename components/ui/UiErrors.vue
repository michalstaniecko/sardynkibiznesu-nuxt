<script setup lang="ts">
const { error } = defineProps<{
  error?: string[];
}>();
</script>

<template>
  <div v-if="error" class="mt-1">
    <p
      v-for="(errorMessage, index) in error"
      :key="index"
      class="text-red-500 text-xs"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped></style>
