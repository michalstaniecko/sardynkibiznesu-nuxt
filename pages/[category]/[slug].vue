<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

type PostProps = {
  post: {
    slug: string;
    content: string;
  };
};

const query = gql`
  query getPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      content
    }
  }
`;

const variables = { id: slug };

const { data } = await useAsyncQuery<PostProps>(query, variables);

if (!data.value?.post) {
  throw createError({
    statusCode: 404,
    message: "Post not found",
  });
}
</script>

<template>
  <div>
    <div>post: {{ slug }}</div>
    <div v-html="data?.post?.content" />
  </div>
</template>

<style scoped></style>
