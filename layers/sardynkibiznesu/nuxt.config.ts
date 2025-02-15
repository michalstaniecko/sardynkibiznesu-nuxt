// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "http://localhost:3000",
    name: "Sardynki Biznesu",
  },

  devtools: { enabled: true },

  i18n: {
    strategy: "prefix_except_default",
    locales: ["pl"],
    defaultLocale: "pl",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: false,
  },

  runtimeConfig: {
    defaultLocale: "pl",
    apiBaseUrl: "https://sardynkibiznesu.pl",
    apiBasePath: "/wp-json/wp/v2",
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  routeRules: {
    // "/": {
    //   swr: 60 * 60,
    // },
    // "/api/**": {
    //   swr: 60 * 60,
    // },
  },

  compatibilityDate: "2025-02-12",
});
