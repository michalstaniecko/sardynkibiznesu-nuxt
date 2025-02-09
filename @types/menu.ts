export type MenuProps = {
  id: string;
  label: string;
  path: string;
  parentId: string;
  uri: string;
  children: MenuProps[];
  target?: string;
};

export type MenuItem = {
  label: string;
  url: string;
  ariaCurrent?: string;
  target?: string;
  children?: any;
  index?: number;
  level?: number;
  isExternal?: boolean;
};
