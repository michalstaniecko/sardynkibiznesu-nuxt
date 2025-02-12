// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "http://localhost:3000",
    name: "Sardynki Biznesu",
  },
  nitro: {
    preset: "cloudflare-pages",
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
    locales: ["pl"],
    defaultLocale: "pl",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: false,
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
  image: {
    domains: [process.env.NUXT_IMAGE_DOMAIN || "localhost"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  routeRules: {
    // "/**": { isr: 60 * 60 },
    "/api/**": {
      cache: {
        //maxAge: 60 * 60,
      },
    },
  },
});
