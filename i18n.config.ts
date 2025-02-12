export default defineI18nConfig(() => ({
  legacy: false,
  locale: process.env.NUXT_DEFAULT_LOCALE!,
  messages: {
    en: {
      welcome: "Welcome",
    },
    pl: {
      welcome: "Witaj",
    },
  },
}));
