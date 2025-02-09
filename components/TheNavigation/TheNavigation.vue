<script setup lang="ts">
import menu from "@/menu.config";
</script>

<template>
  <TheNavigationTheNav>
    <template #logo>
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
        >
      </RouterLink>
    </template>
    <template #menulist>
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 md:border-0 xl:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <TheNavigationItem
          v-for="(item, index) in menu"
          v-bind="item"
          :key="index"
          :level="0"
          :index="index"
        />
      </ul>
    </template>
  </TheNavigationTheNav>
</template>

<style scoped></style>
`
