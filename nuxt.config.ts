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

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://sardynkibiznesu.pl/graphql",
      },
    },
  },
});
