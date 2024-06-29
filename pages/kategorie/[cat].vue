<script setup lang="ts">
const route = useRoute();
const { cat } = route.params;

const query = gql`
  query getCategory($id: ID!, $slug: String!, $postLimit: Int!) {
    category(id: $id, idType: SLUG) {
      name
    }
    posts(where: { categoryName: $slug }, first: $postLimit) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`;

const variables = { id: cat, slug: cat, postLimit: 10 };

const { data, status, error } = await useAsyncQuery(query, variables);
</script>

<template>
  <div>
    <div>Category Name: {{ data.category.name }}</div>
    <div>{{ data }}</div>
  </div>
</template>

<style></style>
