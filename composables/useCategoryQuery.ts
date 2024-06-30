import query from "~/queries/categoryQuery";
import type { PostProps } from "~/@types/post";

export const useCategoryQuery = () => {
  const variables = {
    perPage: 10,
    after: "",
    id: "",
    slug: "",
  };

  const { data, error, status, execute } = useAsyncQuery<{
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

  const setCategory = (category: string) => {
    variables.id = category;
    variables.slug = category;
  };

  return {
    data,
    error,
    status,
    loadMore,
    setCategory,
  };
};
