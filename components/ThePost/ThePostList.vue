<script setup lang="ts">
import type { PostExcerpt } from "~/@types/post";

const emit = defineEmits<{
  loadMore: [];
}>();

const { posts } = defineProps<{
  posts: PostExcerpt[];
}>();
const handleLoadMore = () => {
  emit("loadMore");
};
</script>

<template>
  <div>
    <div class="grid gap-10">
      <ThePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="text-center py-10">
      <button
        class="bg-primary-500 text-white px-5 py-2 rounded-lg disabled:opacity-50"
        @click.prevent="handleLoadMore"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<style scoped></style>
