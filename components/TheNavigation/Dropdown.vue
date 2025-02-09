<script setup lang="ts">
import type { MenuItem } from "~/@types/menu";

const props = defineProps<MenuItem>();

const dropdownId = `dropdownNavbar-${props.level}-${props.index}`;
</script>

<template>
  <button
    id="dropdownNavbarLink"
    :data-dropdown-toggle="dropdownId"
    class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 xl:w-auto dark:text-white xl:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 xl:dark:hover:bg-transparent"
  >
    {{ props.label }}
    <TheNavigationChevron />
  </button>
  <div
    :id="dropdownId"
    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownLargeButton"
    >
      <TheNavigationChild
        v-for="(item, index) in props.children"
        v-bind="item"
        :key="index"
        :index="index"
        :level="1"
      />
    </ul>
  </div>
</template>

<style scoped></style>
