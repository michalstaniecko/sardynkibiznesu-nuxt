import type { H3Event } from "h3";
import type { Comment, CommentResponse } from "~/@types/post";

type Params = {
  post?: number;
  per_page?: number;
  order?: string;
  offset?: number;
  parent?: number[];
};

export const getComments = defineCachedFunction(
  async (
    event: H3Event,
    params: Params | undefined,
  ): Promise<Comment[] | null> => {
    const runtimeConfig = useRuntimeConfig(event);
    const api = runtimeConfig.apiBaseUrl + runtimeConfig.apiBasePath;
    const comments = await $fetch<CommentResponse[]>(`${api}/comments`, {
      params,
    });

    if (!comments) {
      return null;
    }

    return comments.map((comment) => ({
      id: comment.id,
      createdAt: comment.date,
      content: comment.content.rendered,
      author: {
        name: comment.author_name,
        avatar: comment.author_avatar_urls["48"],
      },
      parent: comment.parent,
    }));
  },
  {
    swr: false,
  },
);
