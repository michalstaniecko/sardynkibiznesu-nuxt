<script lang="ts" setup>
import he from "he/he";

const { to, label } = defineProps<{
  to: string;
  label: string;
  index: number;
  isLast: boolean;
}>();

const decodeLabel = computed(() => he.decode(label));
</script>

<template>
  <li>
    <div class="flex items-center">
      <svg
        class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <NuxtLink
        v-if="!isLast"
        :to="to"
        :title="decodeLabel"
        class="whitespace-nowrap overflow-hidden text-ellipsis max-w-28 md:max-w-52 ms-1 text-sm font-medium decoration-2 text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
        >{{ decodeLabel }}</NuxtLink
      >

      <span
        v-if="isLast"
        class="whitespace-nowrap overflow-hidden text-ellipsis max-w-28 md:max-w-52 ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
        >{{ decodeLabel }}</span
      >
    </div>
  </li>
</template>
