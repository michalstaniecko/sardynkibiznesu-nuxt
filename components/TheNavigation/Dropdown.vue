<script setup lang="ts">
import type { MenuItem } from "~/@types/menu";

const props = defineProps<MenuItem>();

const isOpen = ref(false);
const isClicked = ref(false);
const isHovered = ref(false);

const dropdownId = `dropdownNavbar-${props.level}-${props.index}`;

const handleClick = () => {
  isClicked.value = !isClicked.value;
};

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <button
    :id="`dropdownNavbarLink-${props.index}`"
    :data-dropdown-toggle="dropdownId"
    class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 xl:w-auto dark:text-white xl:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 xl:dark:hover:bg-transparent"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    {{ props.label }}
    <TheNavigationChevron />
  </button>
  <div
    :id="dropdownId"
    :class="{ 'max-xl:hidden': !isClicked, 'xl:hidden': !isHovered }"
    class="z-10 font-normal max-xl:w-full xl:absolute xl:left-0 xl:top-full bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
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

<style scoped lang="scss">
.hovered.xl\:hidden {
  display: block;
}

.clicked.hidden {
  display: block;
}
</style>
