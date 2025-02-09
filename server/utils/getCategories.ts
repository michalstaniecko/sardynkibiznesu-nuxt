import type { H3Event } from "h3";
import type { CategoryResponse } from "~/@types/categories";
import { CategoryResponseFields } from "~/@types/categories";

export const getCategories = defineCachedFunction(
  async (event: H3Event, slug: string | undefined) => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const response = await $fetch<CategoryResponse[]>(`${api}/categories`, {
      params: {
        "_fields[]": Object.values(CategoryResponseFields),
      },
    });
    if (slug && response) {
      return response.find((category) => category.slug === slug);
    }
    return response;
  },
  {
    maxAge: 60 * 60 * 1000,
    name: "categories",
    getKey: (_event, slug: string | undefined) => {
      return slug ? `categories/${slug}` : "categories";
    },
  },
);
