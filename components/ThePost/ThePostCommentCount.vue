<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const {
  post: { commentCount },
} = defineProps<{
  post: PostProps;
}>();

const label = {
  singular: "komentarz",
  plural: "komentarze",
  alternate: "komentarzy",
};

const count = computed(() => commentCount || 0);

const commentLabel = () => {
  if (count.value === 1) {
    return label.singular;
  } else if (
    (count.value < 10 || count.value > 20) &&
    Number(count.value!.toString()!.split("")!.pop()) > 1 &&
    Number(count.value!.toString()!.split("")!.pop()) < 5
  ) {
    return label.plural;
  } else {
    return label.alternate;
  }
};
</script>

<template>
  <span> {{ count }} {{ commentLabel() }} </span>
</template>

<style scoped></style>
