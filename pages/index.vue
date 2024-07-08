<script setup lang="ts">
import type { PostProps } from "~/@types/post";

definePageMeta({
  layout: "no-breadcrumb",
});

const posts = ref<PostProps[]>([]);

const { loadMore, status, data } = usePostsQuery();

await loadMore().then(() => true);

posts.value = data.value?.posts.nodes || [];

const handleLoadMore = async () => {
  await loadMore();
  posts.value = data.value?.posts.nodes
    ? [...posts.value, ...data.value.posts.nodes]
    : posts.value;
};
</script>

<template>
  <ThePostList
    :posts="posts"
    :status="status"
    :handle-load-more="handleLoadMore"
  />
</template>

<style scoped></style>
