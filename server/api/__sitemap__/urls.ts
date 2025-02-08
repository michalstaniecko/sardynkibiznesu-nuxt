import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async () => {
  const sitemap = await $fetch<
    {
      title: string;
      link: string;
      modified: string;
    }[]
  >(`https://sardynkibiznesu.pl/wp-json/wp/v2/posts`, {
    params: {
      "_fields[]": ["title", "link", "modified"],
      per_page: 1,
    },
  });
  console.log(
    sitemap.map((item) => ({
      loc: item.link,
      lastmod: item.modified,
    })) as SitemapUrlInput[],
  );
  return sitemap.map((item) => ({
    loc: item.link,
    lastmod: item.modified,
  })) as SitemapUrlInput[];
});
