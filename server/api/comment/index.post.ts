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
      ...body,
      sb_s_key: runtimeConfig.sb_s_key,
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
