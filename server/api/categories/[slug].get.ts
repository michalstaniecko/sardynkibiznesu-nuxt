export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  const categories = await getCategories(event, slug);
  return categories;
});
