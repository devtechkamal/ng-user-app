export interface SidebarItem {
  label: string;
  icon?: string;
  route?: string;
  children?: SidebarItem[];
  roles?: string[];
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}
