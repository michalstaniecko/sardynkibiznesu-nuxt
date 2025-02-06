<script setup lang="ts"></script>

<template>
  <li class="relative navigation__item">
    <NuxtLink
      class="navigation__link dropdown block py-2 pr-4 pl-3 text-gray-700 lg:bg-transparent hover:text-black lg:px-3 dark:text-white"
      href="/"
      type="button"
      >Item
    </NuxtLink>
    <div
      class="navigation-dropdown z-10 bg-white rounded-b-lg lg:shadow lg:w-[16rem] dark:bg-gray-700 overflow-hidden"
    >
      <ul
        class="navigation-dropdown__list text-sm text-gray-700 dark:text-gray-200"
      >
        <li>
          <NuxtLink
            class="navigation-dropdown__link block pl-3 lg:px-4 lg:py-2 font-normal leading-7 lg:hover:bg-gray-100 lg:dark:hover:bg-gray-600 dark:hover:text-white"
            href="/"
            @click="() => {}"
            >Sub item
          </NuxtLink>
        </li>
      </ul>
    </div>
  </li>
</template>

<style scoped></style>
