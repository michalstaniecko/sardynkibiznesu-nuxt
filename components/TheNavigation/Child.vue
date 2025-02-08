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
  <li>
    <TheNavigationChildLink v-if="!props.children" v-bind="props" />
    <TheNavigationChildDropdown v-if="props.children" v-bind="props" />
  </li>
</template>

<style scoped></style>
