import type { Category } from "~/@types/categories";

export enum ResponseFields {
  ID = "id",
  DATE = "date",
  MODIFIED = "modified",
  SLUG = "slug",
  TITLE = "title",
  EXCERPT = "excerpt",
  CONTENT = "content",
  FEATURED_MEDIA = "featured_media",
  LINK = "link",
  TEMPLATE = "template",
  CATEGORIES = "categories",
}

export type PostExcerpt = {
  id: number;
  title: string;
  excerpt: string;
  createdAt: string;
  slug: string;
  featuredMedia: {
    file: string;
  };
  categories: Category[];
  commentsCount: number;
  template: never;
};

export type Post = {
  id: number;
  title: string;
  excerpt?: string;
  content: string;
  createdAt: string;
  slug: string;
  featuredMedia: {
    file: string;
  };
  template?: string;
  categories?: Category[];
  commentsCount?: number;
};

export type Response = {
  [ResponseFields.ID]: number;
  [ResponseFields.DATE]: string;
  [ResponseFields.MODIFIED]: string;
  [ResponseFields.SLUG]: string;
  [ResponseFields.TITLE]: {
    rendered: string;
  };
  [ResponseFields.EXCERPT]: {
    rendered: string;
  };
  [ResponseFields.CONTENT]: {
    rendered: string;
  };
  [ResponseFields.FEATURED_MEDIA]: number;
  [ResponseFields.LINK]: string;
  [ResponseFields.TEMPLATE]: string;
  [ResponseFields.CATEGORIES]: number[];
};

export enum Order {
  ASC = "asc",
  DESC = "desc",
}

export enum Orderby {
  DATE = "date",
  ID = "id",
  INCLUDE = "include",
  TITLE = "title",
  SLUG = "slug",
}

export enum Status {
  PUBLISH = "publish",
}

export type Arguments = {
  per_page?: number;
  offset?: number;
  order?: Order;
  orderby?: Orderby;
  slug?: string[];
  status?: Status;
  categories?: string[];
  categories_exclude?: string[];
  tags?: string[];
  tags_exclude?: string[];
  "_fields[]"?: string[];
};

export enum ContentTypes {
  POSTS = "posts",
  PAGES = "pages",
  CATEGORIES = "categories",
  TAGS = "tags",
}
