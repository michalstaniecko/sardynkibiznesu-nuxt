<script setup lang="ts">
const {
  date = "2021-09-01",
  postId,
  categoryId = 0,
  author,
} = defineProps<{
  date?: string;
  postId?: number;
  categoryId?: number;
  author?: { name: string; slug: string };
}>();

const formatted = useDateFormat(date, "MMMM DD, YYYY");

const { data: count, status } = await useFetch(
  `/api/comments/${postId}/count`,
  {
    server: false,
    method: "GET",
  },
);
</script>

<template>
  <div
    v-if="status !== 'success'"
    role="status"
    class="space-y-2.5 h-7 animate-pulse max-w-lg flex items-center"
  >
    <div class="flex items-center w-full">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
      <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      <div
        class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
      />
    </div>
  </div>
  <div v-if="status === 'success'" class="text-gray-400">
    {{ formatted }} /<ThePostCommentCount :count="count" />
    <ThePostCategory :category-id="categoryId" />/<ThePostAuthor />
  </div>
</template>

<style scoped></style>
