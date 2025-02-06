<script setup lang="ts">
const date = "2021-09-01";
</script>

<template>
  <div class="text-gray-400">
    {{ date }} /<ThePostCommentCount />/w <ThePostCategory />/<ThePostAuthor />
  </div>
</template>

<style scoped></style>
