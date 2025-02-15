import type { H3Event } from "h3";
import type { CategoryResponse } from "~/@types/categories";
import { CategoryResponseFields } from "~/@types/categories";

export const getCategories = defineCachedFunction(
  async (
    event: H3Event,
    query = {},
  ): Promise<CategoryResponse[] | undefined> => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const response = await $fetch<CategoryResponse[]>(`${api}/categories`, {
      params: {
        "_fields[]": Object.values(CategoryResponseFields),
        ...query,
      },
    });
    return response;
  },
  {
    maxAge: 60 * 60,
    name: "getCategories",
    getKey: (_event, query) => JSON.stringify(query),
  },
);

export const getCategoryBySlug = defineCachedFunction(
  async (event: H3Event, slug: string) => {
    if (!slug) {
      return;
    }
    const categories = await getCategories(event, {
      slug,
    });

    if (!categories) {
      return;
    }
    return categories[0];
  },
  {
    maxAge: 60 * 60,
    name: "getCategoryBySlug",
    getKey: (_event, slug) => slug,
  },
);

export const getCategoryById = defineCachedFunction(
  async (event: H3Event, id: string) => {
    if (!id) {
      return;
    }
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const response = await $fetch<CategoryResponse>(`${api}/categories/${id}`, {
      params: {
        "_fields[]": Object.values(CategoryResponseFields),
      },
    });
    return response;
  },
  {
    maxAge: 60 * 60,
    name: "getCategoryById",
    getKey: (_event, id) => id,
  },
);
