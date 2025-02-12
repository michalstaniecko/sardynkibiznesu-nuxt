export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "postId");
  const count = await getCommentsCount(event, postId);
  return count;
});
