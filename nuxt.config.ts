// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  image: {
    inject: true,
    domains: [process.env.NUXT_API_BASE_URL ?? ""],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.NUXT_API_BASE_URL}/graphql`,
      },
    },
  },
});
