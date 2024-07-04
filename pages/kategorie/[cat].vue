<script setup lang="ts">
import type { PostProps } from "~/@types/post";
import { useCategoryQuery } from "~/composables/useCategoryQuery";

const route = useRoute();
const { cat } = route.params;

const posts = ref<PostProps[]>([]);

const { loadMore, status, data, setCategory } = useCategoryQuery();

setCategory(cat as string);

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
  <div class="grid gap-5">
    <div class="text-xl">{{ data?.category.description }}</div>
    <ThePostList
      :posts="posts"
      :status="status"
      :handle-load-more="handleLoadMore"
    />
  </div>
</template>

<style></style>
