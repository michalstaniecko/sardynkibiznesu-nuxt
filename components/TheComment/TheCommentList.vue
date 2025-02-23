<script setup lang="ts">
import type { Comment } from "~/@types/post";
import { useI18n } from "#imports";

const { t } = useI18n();

const { comments, postId } = defineProps<{
  postId: number;
  comments: Comment[] | null;
}>();

const commentsCount = 45;
</script>

<template>
  <section class="bg-white dark:bg-gray-900 antialiased py-5">
    <div class="mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          {{ t("discussion.title") }} ({{ commentsCount }})
        </h2>
      </div>
      <TheCommentForm :post-id="postId" />
      <div v-for="comment in comments" :key="comment.id" class="border-b">
        <TheComment :comment="comment" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
