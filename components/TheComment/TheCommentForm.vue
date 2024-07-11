<script setup lang="ts">
defineProps<{
  postId: number;
}>();
</script>

<template>
  <form class="mb-6">
    <div class="grid gap-3">
      <div class="grid">
        <label for="comment" class="sr-only">Your comment</label>
        <textarea
          id="message"
          rows="4"
          class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        />
      </div>
      <div class="grid lg:grid-cols-3 gap-3">
        <UiInput placeholder="Email" />
        <UiInput placeholder="Name" />
        <UiInput placeholder="Website" />
      </div>
      <div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
