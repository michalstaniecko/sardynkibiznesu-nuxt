import { defineStore } from "pinia";
import type { SettingsProps } from "~/@types/settings";

export const useSettingsStore = defineStore("settings", () => {
  const settings = ref<SettingsProps>();

  async function init() {
    const query = gql`
      query getPageSettings {
        pageSettings {
          logo
          footer
        }
      }
    `;
    const { data } = await useAsyncQuery(
      { query },
      {
        transform: (data: { pageSettings: SettingsProps }) => data.pageSettings,
      },
    );

    settings.value = data.value!;
  }

  return {
    settings,
    init,
  };
});
