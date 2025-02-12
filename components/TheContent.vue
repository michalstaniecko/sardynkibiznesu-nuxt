<script setup lang="ts">
const {content} = defineProps<{
  content: string;
}>()
</script>

<template>
<div class="grid gap-4" v-html="content"/>
</template>

<style scoped>

</style>
