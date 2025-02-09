<script setup lang="ts">
import type { MenuItem } from "~/@types/menu";

const props = defineProps<MenuItem>();
</script>

<template>
  <li>
    <TheNavigationLink v-if="!props.children" v-bind="props" />
    <TheNavigationDropdown v-if="props.children" v-bind="props" />
  </li>
</template>

<style scoped></style>
