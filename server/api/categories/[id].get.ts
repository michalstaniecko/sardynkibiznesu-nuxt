export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    return new Response("Not Found", { status: 404 });
  }
  const category = await getCategoryById(event, id);
  return category;
});
