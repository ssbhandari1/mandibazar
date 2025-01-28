import { ReactNode } from "react";


export interface HeaderItem {
  id: string;
  name: string;
}

export type HeaderType = HeaderItem[];

export interface RowDataType {
  [key: string]: string;
}

export type TableDataType = RowDataType[];

export interface SidebarLinktype {
    id: string;
    name: string;
    icon: ReactNode; // For JSX elements like icons
    route: string;
  }

  export interface ProductType {
    id: number;
    name: string;
    description: string;
  }


