export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }

  try {
    const post = await getPost(event, undefined, slug);
    return post;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }
});
