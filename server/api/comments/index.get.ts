export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  try {
    const comments = await getComments(event, query);
    return comments;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }
});
