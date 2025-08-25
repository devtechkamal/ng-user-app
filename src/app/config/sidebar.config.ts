export type SidebarItem = {
  label: string;
  route?: string;
  icon?: string;
  hasChild: boolean;
  children?: SidebarItem[];
};
