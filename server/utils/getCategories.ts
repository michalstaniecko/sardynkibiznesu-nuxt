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
    swr: false,
  },
);

export const getCategoryBySlug = defineCachedFunction(
  async (event: H3Event, slug: string) => {
    if (!slug) {
      return;
    }
    const categories = await getCategories(event);

    if (categories) {
      return categories.find((category) => category.slug === slug);
    }
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
);
