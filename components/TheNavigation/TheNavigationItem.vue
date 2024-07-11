<script setup lang="ts">
import type { MenuProps } from "~/@types/menu";
import {} from "flowbite";

const route = useRoute();

const { item } = defineProps<{
  item: MenuProps;
}>();

const parentActive = () => {
  if (item.children.length) {
    return item.children.some((child) => route.path === child.path);
  }
  return false;
};

const activeClass = () => {
  if (route.path === item.path) {
    return "router-link-exact-active";
  }
  if (parentActive()) {
    return "router-link-exact-active";
  }
  if (item.path === "#") {
    return "";
  }
  return "";
};

const handleClick = () => {
  const menu = document.getElementById("mobile-menu-2");
};
</script>

<template>
  <li class="relative navigation__item">
    <NuxtLink
      class="navigation__link dropdown block py-2 pr-4 pl-3 text-gray-700 lg:bg-transparent hover:text-black lg:px-3 dark:text-white"
      :href="item.path"
      :target="item.target"
      exact-active-class=" "
      :class="activeClass()"
      type="button"
      @click="handleClick"
      >{{ item.label }}</NuxtLink
    >
    <template v-if="item.children.length">
      <div
        class="navigation-dropdown z-10 bg-white rounded-b-lg lg:shadow lg:w-[16rem] dark:bg-gray-700 overflow-hidden"
      >
        <ul
          class="navigation-dropdown__list text-sm text-gray-700 dark:text-gray-200"
        >
          <li v-for="child in item.children" :key="child.id">
            <NuxtLink
              class="navigation-dropdown__link block pl-3 lg:px-4 lg:py-2 font-normal leading-7 lg:hover:bg-gray-100 lg:dark:hover:bg-gray-600 dark:hover:text-white"
              :href="child.path"
              @click="handleClick"
              >{{ child.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </template>
  </li>
</template>

<style scoped></style>
