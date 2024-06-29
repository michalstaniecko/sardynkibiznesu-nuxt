<script setup lang="ts">
import type { MenuProps } from "~/@types/menu";

defineProps<{
  data: MenuProps[];
}>();
</script>

<template>
  <ul
    class="navigation__list flex flex-col mt-4 font-medium lg:flex-row lg:mt-0"
  >
    <TheNavigationItem v-for="item in data" :key="item.id" :item="item" />
  </ul>
</template>

<style scoped></style>
