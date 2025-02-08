import type { Response } from "~/@types/post";
import { ResponseFields } from "~/@types/post";
import { getMedia } from "~/server/utils/getMedia";
import type { H3Event } from "h3";

export const getPost = defineCachedFunction(
  async (event: H3Event, slug: string) => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const posts = await $fetch<Response[]>(`${api}/posts?slug=${slug}`, {
      params: {
        "_fields[]": Object.values(ResponseFields).filter(
          (field) => field !== ResponseFields.EXCERPT,
        ),
      },
    });

    if (posts.length !== 1 || !posts) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
      });
    }

    const post = posts[0];

    const featuredMedia = await getMedia(event, post.featured_media);

    return {
      id: post.id,
      createdAt: post.date,
      slug: post.slug,
      title: post.title.rendered,
      content: post.content.rendered,
      featuredMedia,
    };
  },
  {
    swr: false,
  },
);
