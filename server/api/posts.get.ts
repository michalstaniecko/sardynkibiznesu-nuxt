import type { Arguments } from "~/@types/post";

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as Arguments;
  const posts = await getPosts(event, query);
  return posts;
});
