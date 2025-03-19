<script setup lang="ts">
import type { Post } from "~/@types/post";
import type { Category } from "~/@types/categories";

const localePath = useLocalePath();
const { t } = useI18n();
const route = useRoute();
const { data, error } = await useFetch<Post>(`/api/post/${route.params.slug}`, {
  method: "GET",
  params: {
    slug: route.params.slug,
  },
});

const links = computed(() => {
  const category = data.value.categories?.[0] as Category;

  const categoryTo = localePath({
    name: "categories-category",
    params: {
      category: category?.slug,
    },
  });

  return [
    {
      to: categoryTo,
      label: category.name,
    },
    {
      to: null,
      label: data.value.title,
    },
  ];
});

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    message: error.value?.statusMessage,
  });
}
</script>

<template>
  <div v-if="data">
    <Head>
      <Title>{{ data.title }}</Title>
    </Head>
    <TheBreadcrumb :links="links" />
    <NuxtImg
      v-if="data.featuredMedia"
      :src="data.featuredMedia.file"
      :alt="data.title"
    />
    <h1 class="mt-5">{{ data.title }}</h1>
    <ThePostMeta
      :date="data.createdAt"
      :comments-count="data.commentsCount ?? 0"
      :category="data.categories?.[0] ?? undefined"
    />
    <TheContent :content="data.content" class="mt-5" />
    <TheCommentList :comments="data.comments" :post-id="data.id" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<style scoped></style>
