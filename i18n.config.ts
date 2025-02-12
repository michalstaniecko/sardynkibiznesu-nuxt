import type { I18nOptions } from "vue-i18n";
import en from "./i18n/en.json";

export default defineI18nConfig(() => {
  const runtimeConfig = useRuntimeConfig();
  return {
    legacy: false,
    locale: runtimeConfig.defaultLocale,
    messages: {
      en: en,
      pl: {
        welcome: "Witaj",
      },
    },
  } as I18nOptions;
});
