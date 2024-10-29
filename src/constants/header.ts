import { svgIcons } from "@/components/SVG";

interface ICategory {
  name: string;
  path?: string;
  children?: ICategory[];
}

export const HEADER_CATEGORIES: ICategory[] = [
  {
    name: "NEW",
    path: "/product/new",
  },
  {
    name: "ALL",
    path: "/product/all",
  },
  {
    name: "CLOTHING",
  },
  {
    name: "EDITORIAL",
    path: "/editorial",
  },
  {
    name: "NOTICE",
    path: "/board/notice",
  },
  {
    name: "Q&A",
    path: "/board/qna",
  },
];

interface IIcon {
  icon: svgIcons;
  path: string;
}

export const HEADER_ICON: IIcon[] = [
  {
    icon: "search",
    path: "/product/search",
  },
  {
    icon: "user",
    path: "/user/info",
  },
  {
    icon: "basket",
    path: "/order/basket",
  },
];
