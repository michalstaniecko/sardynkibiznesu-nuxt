<script setup lang="ts">
import type { Arguments } from "~/@types/post";

definePageMeta({
  layout: "no-breadcrumb",
});

const offset = ref(0);
const perPage = 5;

const args: Arguments = {
  per_page: perPage,
  offset: offset.value,
};

const { status, data: posts } = useFetch("/api/posts", {
  params: args,
});

const loadMore = async () => {
  offset.value += perPage;
  const response = await $fetch("/api/posts", {
    params: {
      ...args,
      offset: offset.value,
    },
  });
  posts.value = [...posts.value, ...response];
};
</script>

<template>
  <ThePostList :posts="posts" @load-more="loadMore" />
</template>

<style scoped></style>
