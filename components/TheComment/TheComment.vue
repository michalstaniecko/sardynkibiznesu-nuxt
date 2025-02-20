<script setup lang="ts">
import type { Comment } from "~/@types/post";
import { useElementVisibility } from "@vueuse/core";
import { vElementVisibility } from "@vueuse/components";
import { useTemplateRef, shallowRef, ref } from "vue";

const { comment } = defineProps<{
  comment: Comment;
}>();

const offset = ref(0);

const { data, execute, status } = useFetch<Comment[]>("/api/comments", {
  method: "GET",
  params: {
    parent: comment.id,
    offset: offset.value,
  },
  immediate: false,
});

const target = useTemplateRef<HTMLDivElement>("target");
const isVisible = shallowRef(false);

function onElementVisibility(state: boolean) {
  if (isVisible.value || !state) {
    return;
  }
  execute();
  isVisible.value = true;
}
</script>

<template>
  <div v-element-visibility="onElementVisibility" class="pl-6">
    <TheCommentArticle :comment="comment" />
    <div v-if="status === 'pending'">
      <div role="status" class="max-w-sm animate-pulse pl-6 pb-3">
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
        />
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"
        />
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"
        />
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="status === 'success' && data">
      <div v-for="comment in data" :key="comment.id" class="pl-6">
        <TheComment :comment="comment" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
