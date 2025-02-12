<script setup lang="ts">
import type { Post } from "~/@types/post";

const route = useRoute();
const { data, error } = await useFetch<Post>(`/api/post/${route.params.slug}`, {
  method: "GET",
  params: {
    slug: route.params.slug,
  },
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
    <NuxtImg :src="data.featuredMedia.file" :alt="data.title" />
    <h1>{{ data.title }}</h1>
    <ThePostMeta />
    <TheContent :content="data.content" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<style scoped></style>
