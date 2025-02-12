export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    return new Response("Not Found", { status: 404 });
  }
  const categories = await getCategoryBySlug(event, slug);
  return categories;
});
