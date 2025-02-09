<script setup lang="ts">
import type { MenuItem } from "~/@types/menu";

const props = defineProps<MenuItem>();

const { isActive } = useLink({ to: props.url });

const classes = [
  "block",
  "py-2",
  "px-3",
  "text-white",
  "rounded-sm",
  "xl:bg-transparent",
  "xl:text-body-900",
  "xl:hover:text-blue-700",
  "xl:p-0",
  "xl:dark:text-blue-500",
  "dark:bg-blue-600",
  "xl:dark:bg-transparent",
];

const exactActiveClasses = [
  "bg-blue-700",
  "xl:bg-transparent",
  "xl:text-blue-700",
].join(" ");
</script>

<template>
  <a
    v-if="props.isExternal"
    :href="props.url"
    :class="!isActive ? classes : exactActiveClasses"
    :target="props.target"
    >{{ props.label }}
  </a>
  <RouterLink
    v-else
    :to="props.url"
    :class="!isActive ? classes : exactActiveClasses"
    aria-current="page"
    >{{ props.label }}
  </RouterLink>
</template>

<style scoped></style>
