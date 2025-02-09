<script setup lang="ts">
import type { Arguments, PostExcerpt } from "~/@types/post";
import { ResponseFields } from "~/@types/post";

definePageMeta({
  layout: "no-breadcrumb",
});

const offset = ref(0);
const perPage = 5;

const args: Arguments = {
  per_page: perPage,
  offset: offset.value,
  "_fields[]": Object.values(ResponseFields).filter(
    (field) => field !== ResponseFields.CONTENT,
  ),
};

const { status, data: posts } = useFetch<PostExcerpt[]>("/api/posts", {
  params: args,
});

const loadMore = async () => {
  offset.value += perPage;
  const response = await $fetch<PostExcerpt[]>("/api/posts", {
    params: {
      ...args,
      offset: offset.value,
    },
  });
  if (!posts.value) {
    posts.value = [];
  }
  posts.value = [...posts.value, ...response];
};
</script>

<template>
  <div v-if="posts">
    <ThePostList :posts="posts" @load-more="loadMore" />
  </div>
  <div v-else>
    <div class="text-center py-10">No posts</div>
  </div>
</template>

<style scoped></style>
