<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const { post } = defineProps<{
  post: PostProps;
}>();

const date = useDateFormat(post.date, "D MMMM, YYYY");
</script>

<template>
  <div class="text-gray-400">
    {{ date }} /<ThePostCommentCount :post="post" />/w
    <ThePostCategory :categories="post.categories" />/<ThePostAuthor
      :author="post.author.node"
    />
  </div>
</template>

<style scoped></style>
