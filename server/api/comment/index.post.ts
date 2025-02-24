export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runtimeConfig = useRuntimeConfig(event);
  const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;

  const response = await $fetch(`${api}/comments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      author_email: "michal@example.pl",
      author_name: "michal",
      content: "comment 2",
      post: 282,
    },
    async onResponseError({ response }) {
      throw createError({
        statusText: response._data.code,
        status: response._data.data.status,
        message: response._data.message,
      });
    },
  });
  return response;
});
