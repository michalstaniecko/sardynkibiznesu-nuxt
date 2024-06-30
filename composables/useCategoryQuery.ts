import query from "~/queries/categoryQuery";

export const useCategoryQuery = () => {
  const variables = {
    perPage: 10,
    after: "",
    id: "",
    slug: "",
  };

  const { data, error, status, execute } = useAsyncQuery(
    { query, variables },
    { immediate: false },
  );

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
