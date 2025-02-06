<script setup lang="ts"></script>

<template>
  <div class="grid gap-10">
    <div v-if="category.description" class="text-lg font-normal">
      {{ category.description }}
    </div>
    <ThePostList
      :posts="postsRef"
      :status="status"
      :handle-load-more="handleLoadMore"
    />
  </div>
</template>

<style scoped></style>
