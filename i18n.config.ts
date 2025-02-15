import type { I18nOptions } from "vue-i18n";
import en from "./i18n/en.json";
import pl from "./i18n/pl.json";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    messages: {
      en: en,
      pl: pl,
    },
  } as I18nOptions;
});
