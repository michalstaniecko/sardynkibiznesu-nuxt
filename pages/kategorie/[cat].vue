<script setup lang="ts">
import type { PostProps } from "~/@types/post";
import { useCategoryQuery } from "~/composables/useCategoryQuery";

const route = useRoute();
const { cat } = route.params;

const posts = ref<{
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
  nodes: PostProps[];
}>();

const { loadMore, status, data, setCategory } = useCategoryQuery();

setCategory(cat as string);

await loadMore().then(() => true);

posts.value = data.value?.posts || [];

const handleLoadMore = async () => {
  await loadMore();
  posts.value = data.value?.posts.nodes
    ? [...posts.value, ...data.value.posts.nodes]
    : posts.value;
};
</script>

<template>
  <div class="grid gap-5">
    <TheCategory
      :category="data.category"
      :posts="data.posts"
      status="status"
      :load-more="loadMore"
    />
  </div>
</template>

<style></style>
