<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const variables = {
  perPage: 10,
};

const query = gql`
  query allPosts($perPage: Int = 10) {
    posts(first: $perPage, where: { status: PUBLISH }) {
      edges {
        cursor
        node {
          id
          title
          excerpt
          slug
          uri
          author {
            node {
              name
              uri
            }
          }
          categories {
            nodes {
              name
              uri
            }
          }
          date
          commentCount
          featuredImage {
            node {
              mediaDetails {
                sizes(include: [SINGLE_DESKTOP]) {
                  sourceUrl
                  name
                }
              }
              id
              srcSet
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const { data, error, refresh, status } = await useAsyncQuery<{
  edges: {
    cursor: string;
    node: PostProps;
  }[];
}>({ query, variables });

const handleLoadMore = () => {
  variables.perPage += 10;
  refresh();
};
</script>

<template>
  <div>
    <template v-if="data?.posts?.edges">
      <div class="grid gap-10">
        <ThePost
          v-for="post in data.posts?.edges"
          :key="post.node.id"
          :post="post.node"
        />
      </div>
    </template>
    <div class="text-center py-10">
      <button
        :disabled="status === 'pending'"
        class="bg-primary-500 text-white px-5 py-2 rounded-lg disabled:opacity-50"
        @click.prevent="handleLoadMore"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<style scoped></style>
