<script setup lang="ts">
const modelValue = defineModel();

const { error, placeholder } = defineProps<{
  error?: string[];
  placeholder?: string;
}>();

const isError = computed(() => error && error?.length > 0);
const errorClass = computed(() => (isError.value ? "border-red-500" : ""));
</script>

<template>
  <div>
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      type="text"
      :class="errorClass"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <UiErrors :error="error" />
  </div>
</template>
