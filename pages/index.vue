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
  <div>
    <template v-if="posts">
      <div class="grid gap-10">
        <ThePost v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </template>
    <div class="text-center py-10">
      <button
        :disabled="status === 'pending'"
        class="bg-primary-500 text-white px-5 py-2 rounded-lg disabled:opacity-50"
        @click.prevent="handleLoadMore"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<style scoped></style>
