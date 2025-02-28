<script setup lang="ts">
import type { MenuItem } from "~/@types/menu";

const props = defineProps<MenuItem>();

const { isActive } = useLink({ to: props.url });

const classes = [
  "block",
  "py-2",
  "px-3",
  "rounded-sm",
  "xl:p-0",
  "hover:no-underline",
  "xl:hover:underline",
];

const inactiveClasses = [
  "xl:bg-transparent",
  "text-body-900",
  "xl:hover:text-blue-700",
];

const exactActiveClasses = [
  "text-white",
  "bg-blue-700",
  "xl:bg-transparent",
  "xl:text-blue-700",
].join(" ");
</script>

<template>
  <a
    v-if="props.isExternal"
    :href="props.url"
    :class="[classes, !isActive ? classes : exactActiveClasses]"
    :target="props.target"
    >{{ props.label }}
  </a>
  <RouterLink
    v-else
    :to="props.url"
    :class="[classes, !isActive ? classes : exactActiveClasses]"
    aria-current="page"
    >{{ props.label }}
  </RouterLink>
</template>

<style scoped></style>
