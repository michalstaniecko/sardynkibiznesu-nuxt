import type { H3Event } from "h3";

export const getMedia = defineCachedFunction(
  async (event: H3Event, id: number) => {
    if (!id) {
      return null;
    }
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const results = await $fetch<{
      source_url: string;
    }>(`${api}/media/${id}`);
    return {
      file: results.source_url,
    };
  },
  {
    maxAge: 60 * 60,
    name: "getMedia",
    getKey: (_event, id) => JSON.stringify(id),
  },
);
