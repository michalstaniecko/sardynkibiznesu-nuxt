<script setup lang="ts">
import menu from "@/menu.config";
const { locale } = useI18n();
const langMenu = menu[locale.value];
</script>

<template>
  <TheNavigationTheNav>
    <template #logo>
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <NuxtImg
          format="webp"
          width="341"
          height="40"
          src="https://smallfishbusiness.com/wp-content/uploads/2021/11/logo-small-fish-business.png"
        />
      </RouterLink>
    </template>
    <template #menulist>
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 md:border-0 xl:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <TheNavigationItem
          v-for="(item, index) in langMenu"
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
