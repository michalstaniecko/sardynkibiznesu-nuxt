<script setup lang="ts">
defineProps<{
  sourceUrl: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}>();
</script>

<template>
  <div class="">
    <NuxtImg
      :src="sourceUrl"
      :srcset="srcSet"
      :width="width"
      :height="height"
      :alt="alt"
    />
  </div>
</template>

<style scoped></style>
