<script setup lang="ts">
import type { PostProps } from "~/@types/post";

const { post } = defineProps<{
  post: PostProps;
}>();

const imageFull = post.featuredImage?.node;

const ratio = 768 / imageFull?.mediaDetails.width;

const width = 768;
const height = ratio * imageFull?.mediaDetails.height;

const errorHandler = (e) => {
};
</script>

<template>
  <div class="grid md:grid-cols-[200px_1fr] gap-5">
    <div>
      <nuxt-link :to="post.uri">
        <NuxtImg
          :src="imageFull.sourceUrl"
          :alt="post.title"
          format="webp"
          loading="lazy"
          :width="width"
          :height="height"
          sizes="768px md:200px"
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

<style>
.about-author {
  padding: 24px 24px 24px 70px;
  margin-bottom: 24px;
  margin-top: 24px;
  background-color: #efefef;
  position: relative;
  margin-left: 48px;
  min-height: 148px;
  max-width: 620px;

  @media (max-width: 768px) {
    padding: 24px 24px 24px 40px;
  }
}

.about-author__title {
  margin-bottom: 12px;
  font-weight: 700;
}

.about-author__meta-title {
  font-size: 12px;
}

.about-author__description {
  font-size: 14px;
}

.about-author__image {
  position: absolute;
  left: -48px;
  top: 24px;
  img {
    border-radius: 50%;
    border: 2px solid #fff;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
}

.about-author__links {
  margin-top: 8px;
  a {
    margin-right: 0.5rem;
  }
}
</style>
