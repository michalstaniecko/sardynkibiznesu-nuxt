<script setup lang="ts">
import type { CommentProps } from "~/@types/post";

defineProps<{
  comment: CommentProps;
}>();
</script>

<template>
  <div class="pl-6">
    <TheCommentArticle :comment="comment" />
    <template v-if="comment.replies?.length">
      <TheComment
        v-for="reply in comment.replies"
        :key="reply.databaseId"
        :comment="reply"
      />
    </template>
  </div>
</template>

<style scoped></style>
