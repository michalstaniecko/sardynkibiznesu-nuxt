<script setup lang="ts">
import type { Post } from "~/@types/post";

const layout = ref<string>("default");

definePageMeta({
  layout: false,
});

const route = useRoute();
const { data } = await useFetch<Post>(`/api/page/${route.params.slug}`, {
  method: "GET",
  params: {
    slug: route.params.slug,
  },
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
    fatal: true,
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

const links = computed(() => {
  return [
    {
      to: "",
      label: data.value.title,
    },
  ];
});
</script>

<template>
  <NuxtLayout :name="layout">
    <TheBreadcrumb v-if="layout === 'default'" :links="links" />
    <h1>{{ data.title }}</h1>
    <TheContent v-if="data" :content="data.content" class="mt-5" />
  </NuxtLayout>
</template>

<style scoped></style>
