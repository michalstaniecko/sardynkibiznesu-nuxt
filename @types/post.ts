export type PostExcerpt = {
  id: number;
  title: string;
  excerpt: string;
  createdAt: string;
  slug: string;
  featuredMedia: {
    file: string;
  };
};

export type Response = {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
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
};
