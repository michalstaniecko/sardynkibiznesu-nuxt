<script setup lang="ts">
import type { PostProps } from "~/@types/post";

defineProps<{
  posts: PostProps[];
  status: string;
  handleLoadMore: () => void;
}>();
</script>

<template>
  <div>
    <template v-if="posts">
      <div class="grid gap-10">
        <ThePost v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="text-center py-10">
        <button
          :disabled="status === 'pending'"
          class="bg-primary-500 text-white px-5 py-2 rounded-lg disabled:opacity-50"
          @click.prevent="handleLoadMore"
        >
          Load more
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
