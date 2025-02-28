export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
  ],

  image: {
    domains: process.env.NUXT_IMAGE_DOMAINS!.split(","),
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    provider: "ipx",
  },

  css: ["~/assets/scss/tailwindcss.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  routeRules: {
    // "/": {
    //   swr: 60 * 60,
    // },
  },

  compatibilityDate: "2025-02-12",
});
