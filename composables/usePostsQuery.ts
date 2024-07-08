import query from "~/queries/postsQuery";
import type { PostProps } from "~/@types/post";

export const usePostsQuery = () => {
  const variables = {
    perPage: 10,
    after: "",
  };

  const { data, error, status, execute } = useAsyncQuery<{
    posts: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
      nodes: PostProps[];
    };
  }>(
    { query, variables },
    {
      immediate: false,
    },
  );

  const loadMore = async () => {
    variables.after = data?.value?.posts.pageInfo.endCursor || "";
    await execute();
  };

  return {
    data,
    error,
    status,
    loadMore,
  };
};
