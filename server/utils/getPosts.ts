import type { H3Event } from "h3";
import { getMedia } from "~/server/utils/getMedia";
import type { Response, Arguments } from "~/@types/post";
import { ResponseFields } from "~/@types/post";
import type { Category } from "~/@types/categories";

const initArguments: Arguments = {
  per_page: 10,
};

export const getPosts = defineCachedFunction(
  async (event: H3Event, args: Arguments = initArguments) => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const results = await $fetch<Response[]>(`${api}/posts`, {
      params: args,
    });

    return await Promise.all(
      results.map(async (post) => {
        const featuredMedia = await getMedia(event, post.featured_media);
        const categoriesIds = post[ResponseFields.CATEGORIES];
        const categories: Category[] = await Promise.all(
          categoriesIds
            .map(async (categoryId) => {
              const category = await getCategoryById(
                event,
                categoryId as unknown as string,
              );
              if (!category) {
                return undefined;
              }
              return {
                id: category.id,
                name: category.name,
                slug: category.slug,
              };
            })
            .filter(
              (category) => category !== undefined,
            ) as Promise<Category>[],
        );
        const slug = post[ResponseFields.LINK].replace(
          runtimeConfig.apiBaseUrl,
          "",
        );
        const commentsCount = await getCommentsCount(event, post.id);
        return {
          id: post.id,
          createdAt: post[ResponseFields.DATE],
          slug: slug,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          featuredMedia,
          categories: categories,
          commentsCount: commentsCount,
        };
      }),
    );
  },
  {
    swr: false,
  },
);
