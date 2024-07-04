<script setup lang="ts">
defineProps<{
  page: {
    title: string;
    content: string;
    excerpt: string;
    template: {
      templateName: string;
    };
  };
}>();
</script>

<template>
  <div class="article article--page">
    <div class="article__content" v-html="page.content" />
  </div>
</template>

<style scoped></style>
