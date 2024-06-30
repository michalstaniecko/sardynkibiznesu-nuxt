<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const img = useImage();

const { post } = defineProps<{
  post: PostProps;
}>();

const imageSmall = post.featuredImage?.node?.mediaDetails?.sizes?.[0];

const imageFull = post.featuredImage?.node;

const imageUrl = imageSmall?.sourceUrl || imageFull?.sourceUrl;

const src = ref(`${imageUrl}.webp`);

const width = imageSmall?.width || imageFull?.mediaDetails.width;
const height = imageSmall?.height || imageFull?.mediaDetails.height;

const errorHandler = () => {
  src.value = imageUrl;
};
</script>

<template>
  <div class="grid md:grid-cols-[200px_1fr] gap-5">
    <div>
      <nuxt-link :to="post.uri">
        <NuxtImg
          format="webp"
          :src="img(src)"
          :alt="post.title"
          loading="lazy"
          :width="width"
          :height="height"
          @error="errorHandler"
        />
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
