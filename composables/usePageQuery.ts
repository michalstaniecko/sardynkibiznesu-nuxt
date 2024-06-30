import query from "~/queries/pageQuery";
import type { PostProps } from "~/@types/post";

export const usePageQuery = () => {
  const variables = {
    id: "",
    slug: "",
    perPage: 10,
    after: "",
  };

  const { data, error, status, execute } = useAsyncQuery<{
    page: {
      title: string;
      content: string;
      excerpt: string;
    };
    category: {
      name: string;
    };
    posts: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
      nodes: PostProps[];
    };
  }>({ query, variables }, { immediate: false });

  const loadMore = async () => {
    variables.after = data?.value?.posts.pageInfo.endCursor || "";
    await execute();
  };

  const setPage = (page: string) => {
    variables.id = page;
    variables.slug = page;
  };

  return {
    data,
    error,
    status,
    loadMore,
    setPage,
  };
};
