<script setup lang="ts">
import categoryQuery from "~/queries/categoryQuery";
import type { PostProps } from "~/@types/post";
import { useCategoryQuery } from "~/composables/useCategoryQuery";

const route = useRoute();
const { cat } = route.params;

const variables = { id: cat, slug: cat, perPage: 10 };

const posts = ref<PostProps[]>([]);

const { loadMore, status, data, setCategory } = useCategoryQuery();

setCategory(cat as string);

await loadMore().then(() => true);

posts.value = data.value?.posts.nodes || [];

console.log(data.value);

const handleLoadMore = async () => {
  await loadMore();
  posts.value = data.value?.posts.nodes
    ? [...posts.value, ...data.value.posts.nodes]
    : posts.value;
};
</script>

<template>
  <div>
    <div>{{ data.category.name }}</div>
    <ThePostList
      :posts="posts"
      :status="status"
      :handle-load-more="handleLoadMore"
    />
  </div>
</template>

<style></style>
