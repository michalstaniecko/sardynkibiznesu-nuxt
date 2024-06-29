<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const { post } = defineProps<{
  post: PostProps;
}>();

const imageSmall = post.featuredImage?.node?.mediaDetails?.sizes?.[0].sourceUrl;

const imageFull = post.featuredImage?.node?.sourceUrl;

const imageUrl = imageSmall || imageFull;
</script>

<template>
  <div class="grid md:grid-cols-[200px_1fr] gap-5">
    <div>
      <nuxt-link :to="post.uri">
        <NuxtImg :src="imageUrl" :alt="post.title" />
      </nuxt-link>
    </div>
    <div class="grid">
      <nuxt-link :to="post.uri" class="">
        <h2 class="text-2xl">{{ post.title }}</h2>
      </nuxt-link>
      <ThePostMeta :post="post" />
      <div class="py-5" v-html="post.excerpt" />
      <div>
        <nuxt-link :to="post.uri" class="text-primary-500">
          Czytaj dalej
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
