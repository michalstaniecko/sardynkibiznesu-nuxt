import type { H3Event } from "h3";

export const getCommentsCount = defineCachedFunction(
  async (event: H3Event, postId: number) => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;

    const response = await $fetch<string[]>(`${api}/comments`, {
      method: "GET",
      params: {
        post: [postId],
        "_fields[]": ["id"],
        per_page: 100,
      },
    });

    return response.length;
  },
  {
    maxAge: 60 * 60,
    name: "getCommentsCount",
    getKey: (_event, postId) => postId.toString(),
  },
);
