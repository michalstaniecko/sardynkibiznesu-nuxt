// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./layers/" + process.env.DEPLOYED_SERVICE, "./layers/base"],
  devtools: { enabled: true },
});
