export type CategoryProps = {
  name: string;
  uri: string;
};

export enum CategoryResponseFields {
  ID = "id",
  NAME = "name",
  SLUG = "slug",
}

export type CategoryResponse = {
  [CategoryResponseFields.ID]: number;
  [CategoryResponseFields.NAME]: string;
  [CategoryResponseFields.SLUG]: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};
