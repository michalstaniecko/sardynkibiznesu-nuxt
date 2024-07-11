<script setup lang="ts">
import type { CommentProps } from "~/@types/post";

const { comments } = defineProps<{
  postId: number;
  commentsCount: number;
  comments: CommentProps[] | null;
}>();

const addChildren = (comment: CommentProps): CommentProps => {
  const currentId = comment.databaseId; // id 2006
  const replies = comment.replies;

  const possibleChildren = comments!.filter(
    (comment) => comment.parentDatabaseId === currentId, // 2006 === 2006
  );

  if (!possibleChildren) return comment;

  const children = possibleChildren.filter(
    (comment) =>
      !(
        replies?.length &&
        replies.some((reply) => reply.databaseId === comment.databaseId)
      ),
  );

  return {
    ...comment,
    replies: children.map(addChildren),
  };
};

const formattedComments = computed(() => {
  if (!comments) return null;

  const withChildren = comments.map(addChildren);

  return withChildren.filter((comment) => comment.parentDatabaseId === 0);
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900 antialiased">
    <div class="mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Dyskusja ({{ commentsCount }})
        </h2>
      </div>
      <TheCommentForm :post-id="postId" />
      <template v-if="formattedComments">
        <div
          v-for="comment in formattedComments"
          :key="comment.databaseId"
          class="border-b"
        >
          <TheComment :comment="comment" />
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped></style>
