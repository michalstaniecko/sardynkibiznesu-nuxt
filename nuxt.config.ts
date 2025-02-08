// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "http://localhost:3000",
    name: "Sardynki Biznesu",
  },
  devtools: { enabled: true },
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
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "pl"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_API_BASE_URL || "http://localhost",
    apiBasePath: process.env.NUXT_API_BASE_PATH || "/wp-json/wp/v2",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
});
