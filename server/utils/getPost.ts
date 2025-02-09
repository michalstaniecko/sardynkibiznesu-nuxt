import type { Response } from "~/@types/post";
import { ContentTypes, ResponseFields } from "~/@types/post";
import { getMedia } from "~/server/utils/getMedia";
import type { H3Event } from "h3";

export const getPost = defineCachedFunction(
  async (
    event: H3Event,
    contentType: ContentTypes = ContentTypes.POSTS,
    slug: string,
  ) => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const posts = await $fetch<Response[]>(
      `${api}/${contentType}?slug=${slug}`,
      {
        params: {
          "_fields[]": Object.values(ResponseFields).filter(
            (field) => field !== ResponseFields.EXCERPT,
          ),
        },
      },
    );

    if (posts.length !== 1) {
      return null;
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
      template: post[ResponseFields.TEMPLATE],
    };
  },
  {
    maxAge: 60 * 60 * 1000,
    name: "getPost",
    getKey: (_event, contentType, slug) => `${contentType}-${slug}`,
  },
);
