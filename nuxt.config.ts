// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    accessRestricted: false,
    accessRestrictedPassword: "",
    public: {
      baseURL: process.env.NUXT_API_BASE_URL,
    },
  },
  image: {
    domains: ["sardynkibiznesu.pl"],
    ipx: {
      maxAge: 60 * 60 * 24 * 30,
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.NUXT_API_BASE_URL}/graphql`,
      },
    },
  },

  routeRules: {
    '/**': {
      swr: 60 * 60
    }
  },
});
