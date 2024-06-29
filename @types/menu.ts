export type MenuProps = {
  id: string;
  label: string;
  path: string;
  parentId: string;
  uri: string;
  children: MenuProps[];
  target?: string;
};
