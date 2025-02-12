<script lang="ts" setup>
import type { Category } from "~/@types/categories";
import type { PostExcerpt } from "~/@types/post";

defineI18nRoute({
  paths: {
    pl: "/kategorie/[category]",
    en: "/category/[category]",
  },
});

const route = useRoute();

const slug = route.params.category;

const { data: categories } = await useFetch<Category>(
  `/api/categories/${slug}`,
);

if (!categories.value) {
  console.log("error");
  throw createError({
    statusCode: 404,
    message: "Category not found",
  });
}

const { data: posts } = await useFetch<PostExcerpt[]>(`/api/posts`, {
  method: "GET",
  params: {
    categories: categories.value.id,
  },
});

const loadMore = () => {};
</script>

<template>
  <div v-if="posts">
    <ThePostList :posts="posts" @load-more="loadMore" />
  </div>
  <div v-else>
    <div class="text-center py-10">No posts</div>
  </div>
</template>
