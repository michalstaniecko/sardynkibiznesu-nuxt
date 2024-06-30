<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

type PageProps = {
  page: {
    title: string;
    content: string;
    excerpt: string;
  };
};

const query = gql`
  query getPage($id: ID!, $slug: String!) {
    page(id: $id, idType: URI) {
      title
      content
      excerpt
    }
    category(id: $id, idType: SLUG) {
      name
    }
    posts(where: { categoryName: $slug }, first: 10) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`;

const variables = { id: slug, slug: slug };

const { data, status } = await useAsyncQuery<PageProps>(query, variables);

if (!data.value?.page && !data.value?.category) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
  });
}

useHead({
  title: data.value.page.title,
  meta: [
    {
      name: "description",
      content: data.value.page.excerpt,
    },
  ],
});
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
