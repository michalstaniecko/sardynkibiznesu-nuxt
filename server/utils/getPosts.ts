import type { H3Event } from "h3";
import { getMedia } from "~/server/utils/getMedia";
import type { Response, Arguments } from "~/@types/post";
import { ResponseFields } from "~/@types/post";

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
        const slug = post[ResponseFields.LINK].replace(
          runtimeConfig.apiBaseUrl,
          "",
        );
        return {
          id: post.id,
          createdAt: post[ResponseFields.DATE],
          slug: slug,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          featuredMedia,
        };
      }),
    );
  },
  {
    swr: false,
  },
);
