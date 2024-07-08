<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const { data, status, loadMore, setPage } = usePageQuery();
setPage(slug as string);

await loadMore().then(() => true);

if (!data.value?.page && !data.value?.category) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
  });
}
</script>

<template>
  <Suspense>
    <div>
      <ThePage v-if="data?.page" :page="data.page" />
      <TheCategory
        v-else-if="data?.category"
        :category="data.category"
        :posts="data.posts"
        :load-more="loadMore"
        :status="status"
      />
    </div>
    <template #fallback> Loading </template>
  </Suspense>
</template>

<style scoped></style>
