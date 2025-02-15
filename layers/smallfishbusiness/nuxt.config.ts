// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "http://localhost:3000",
    name: "Small Fish Businsess",
  },

  devtools: { enabled: true },

  i18n: {
    strategy: "prefix_except_default",
    locales: ["en"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: false,
  },

  runtimeConfig: {
    defaultLocale: "en",
    apiBaseUrl: "https://smallfishbusiness.com",
    apiBasePath: "/wp-json/wp/v2",
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  routeRules: {
    "/": {
      swr: 60 * 60,
    },
    "/**/*": {
      swr: 60 * 60,
    },
    "/api/**": {
      swr: 60 * 60,
    },
    "_ipx/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  },

  compatibilityDate: "2025-02-12",
});
