<script setup lang="ts">
import type { Post } from "~/@types/post";

const layout = ref<string>("default");

definePageMeta({
  layout: false,
});

const route = useRoute();
const { data, error } = await useFetch<Post>(`/api/page/${route.params.slug}`, {
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

const handlePageLayout = () => {
  if (!data.value) return null;
  const template = data.value.template;
  if (!template) return null;

  if (template.includes("boxed-without-sidebar")) {
    layout.value = "full-width";
  }
};

if (data.value) {
  handlePageLayout();
}
</script>

<template>
  <NuxtLayout :name="layout">
    <div v-if="data" v-html="data.content" />
  </NuxtLayout>
</template>

<style scoped></style>
