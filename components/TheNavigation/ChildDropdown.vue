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
  <button
    id="doubleDropdownButton"
    data-dropdown-toggle="doubleDropdown"
    data-dropdown-placement="right-start"
    type="button"
    class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  >
    {{ props.label }}
    <svg
      class="w-2.5 h-2.5 ms-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  <div
    id="doubleDropdown"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="doubleDropdownButton"
    >
      <li v-for="(item, index) in props.children" :key="index">
        <RouterLink
          :to="item.url"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >{{ item.label }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
