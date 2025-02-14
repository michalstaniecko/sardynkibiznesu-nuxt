import type { Category } from "~/@types/categories";
export default defineEventHandler(
  async (event): Promise<Category[] | undefined> => {
    const query = getQuery(event);
    const categories = await getCategories(event, query);
    return categories;
  },
);
