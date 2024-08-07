import type { CategoryProps } from "~/@types/categories";

export type PostProps = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  uri: string;
  author: {
    node: {
      name: string;
      uri: string;
    };
  };
  categories: {
    nodes: CategoryProps[];
  };
  date: string;
  commentCount?: number;
  featuredImage: {
    node: {
      mediaDetails: {
        sizes: {
          sourceUrl: string;
          name: string;
          width: number;
          height: number;
        }[];
        width: number;
        height: number;
      };
      id: string;
      srcSet: string;
      sourceUrl: string;
    };
  };
};
