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
    id="dropdownNavbarLink"
    data-dropdown-toggle="dropdownNavbar"
    class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
    id="dropdownNavbar"
    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownLargeButton"
    >
      <TheNavigationChild
        v-for="(item, index) in props.children"
        v-bind="item"
        :key="index"
      />
    </ul>
  </div>
</template>

<style scoped></style>
