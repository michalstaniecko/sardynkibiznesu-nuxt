<script setup lang="ts">
import type { PostExcerpt } from "~/@types/post";

const { post } = defineProps<{
  post: PostExcerpt;
}>();
const title = post.title;
const uri = post.slug;
const excerpt = post.excerpt;
const imageUrl = post.featuredMedia.file;
</script>

<template>
  <div class="grid md:grid-cols-[200px_1fr] gap-5">
    <div>
      <nuxt-link :to="uri">
        <NuxtImg
          sizes="320px xs:640px sm:712px md:712px"
          :src="imageUrl"
          format="webp"
          width="712"
          height="401"
          loading="lazy"
          quality="90"
        />
      </nuxt-link>
    </div>
    <div class="grid">
      <nuxt-link :to="uri" class="">
        <h2 class="text-2xl">{{ title }}</h2>
      </nuxt-link>
      <ThePostMeta />
      <div class="py-5" v-html="excerpt" />
      <div>
        <nuxt-link :to="uri" class="text-primary-500"> Czytaj dalej </nuxt-link>
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
