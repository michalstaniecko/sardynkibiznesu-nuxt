<script setup lang="ts">
import type { MenuItem } from "~/@types/menu";

const props = defineProps<MenuItem>();
</script>

<template>
  <li class="relative">
    <TheNavigationChildLink v-if="!props.children" v-bind="props" />
    <TheNavigationChildDropdown v-if="props.children" v-bind="props" />
  </li>
</template>

<style scoped></style>
