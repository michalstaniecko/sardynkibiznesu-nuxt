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
  });
  return response;
});
