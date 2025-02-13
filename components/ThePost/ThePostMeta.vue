<script setup lang="ts">
import type { Category } from "~/@types/categories";

const {
  date = "2021-09-01",
  category,
  commentsCount: count = 0,
} = defineProps<{
  category: Category;
  date?: string;
  author?: { name: string; slug: string };
  commentsCount: number;
}>();

const formatted = useDateFormat(date, "MMMM DD, YYYY");
</script>

<template>
  <div class="text-gray-400">
    {{ formatted }} /<ThePostCommentCount :count="count" />
    <ThePostCategory :category="category" />/<ThePostAuthor />
  </div>
</template>

<style scoped></style>
