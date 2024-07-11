<script setup lang="ts">
import type { PostProps } from "~/@types/post";
import query from "~/queries/postQuery";

const route = useRoute();
const { slug } = route.params;

const variables = { id: slug };

const { data } = await useAsyncQuery<{ post: PostProps }>(query, variables);

if (!data.value?.post) {
  throw createError({
    statusCode: 404,
    message: "Post not found",
  });
}

provide("postId", data.value.post.id);
</script>

<template>
  <div class="grid gap-5 article article--post">
    <ThePostFeaturedImage
      v-if="data"
      :source-url="data.post.featuredImage.node.sourceUrl"
      :src-set="data.post.featuredImage.node.srcSet"
      :width="data.post.featuredImage.node.mediaDetails.width"
      :height="data.post.featuredImage.node.mediaDetails.height"
      :alt="data.post.title"
    />
    <div>
      <h1 class="">{{ data?.post.title }}</h1>
      <ThePostMeta v-if="data" :post="data.post" />
    </div>
    <div class="article__content" v-html="data?.post?.content" />
    <TheCommentList
      :post-id="data?.post?.id ?? 0"
      :comments-count="data?.post.commentCount ?? 0"
      :comments="data?.post?.comments?.nodes || null"
    />
  </div>
</template>

<style scoped></style>
