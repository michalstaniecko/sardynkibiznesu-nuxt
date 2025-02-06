// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});
