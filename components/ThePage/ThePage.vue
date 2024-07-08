<script setup lang="ts">
const {
  page: {
    template: { templateName },
  },
} = defineProps<{
  page: {
    title: string;
    content: string;
    excerpt: string;
    template: {
      templateName: string;
    };
  };
}>();

useHead({
  bodyAttrs: {
    class: templateName.toLowerCase().replaceAll(" ", "-"),
  },
});
</script>

<template>
  <div class="article article--page">
    <div class="article__content" v-html="page.content" />
  </div>
</template>

<style scoped></style>
