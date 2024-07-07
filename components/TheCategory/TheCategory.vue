<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const { loadMore, posts } = defineProps<{
  status: string;
  loadMore: () => Promise<void>;
  category: {
    name: string;
    description: string;
  };
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    nodes: PostProps[];
  };
}>();

const postsRef = ref<PostProps[]>(posts.nodes);

const handleLoadMore = async () => {
  await loadMore();
  postsRef.value = postsRef.value.concat(posts.nodes);
};
</script>

<template>
  <div class="grid gap-10">
    <div v-if="category.description" class="text-lg font-normal">
      {{ category.description }}
    </div>
    <ThePostList
      :posts="postsRef"
      :status="status"
      :handle-load-more="handleLoadMore"
    />
  </div>
</template>

<style scoped></style>
