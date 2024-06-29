<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

type PageProps = {
  page: {
    title: string;
    content: string;
  };
};

const query = gql`
  query getPage($id: ID!) {
    page(id: $id, idType: URI) {
      title
      content
    }
  }
`;

const variables = { id: slug };

const { data, status } = await useAsyncQuery<PageProps>(query, variables);

if (!data.value?.page) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
  });
}
</script>

<template>
  <div>
    <div>
      {{ data?.page.title }}
    </div>
    <div>
      {{ status }}
    </div>
    <div v-html="data?.page.content" />
  </div>
</template>

<style scoped></style>
