import { IconType } from 'react-icons';

export type MenuType = 'simple' | 'composed';
export interface SubLink {
  link: string;
  title: string;
  icon: IconType;
}
export interface MenuInterface {
  title: string;
  type: MenuType;
  link: string;
  icon: IconType;
  subLinks?: SubLink[];
}
