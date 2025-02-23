<script setup lang="ts">
const modelValue = defineModel<string>();

const { error } = defineProps<{
  error?: string[];
}>();

const isError = computed(() => error && error?.length > 0);
const errorClass = computed(() => (isError.value ? "border-red-500" : ""));
</script>

<template>
  <textarea
    id="message"
    v-model="modelValue"
    rows="4"
    :class="errorClass"
    class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Write your thoughts here..."
  />
  <UiErrors :error="error" />
</template>

<style scoped></style>
