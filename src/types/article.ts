export const colorToClass = {
  red: "text-red-500 bg-red-100",
  gray: "text-gray-500 bg-gray-100",
  default: "text-neutral-100 bg-neutral-700",
  brown: "text-amber-100 bg-amber-900",
  orange: "text-orange-500 bg-orange-100",
  yellow: "text-yellow-700 bg-yellow-100",
  green: "text-green-700 bg-green-100",
  purple: "text-indigo-600 bg-indigo-100",
  pink: "text-pink-500 bg-pink-100",
  blue: "text-sky-600 bg-sky-100",
};

export const borderColor = {
  red: "border-red-500",
  gray: "border-gray-500",
  default: "border-neutral-100",
  brown: "border-amber-900",
  orange: "border-orange-500",
  yellow: "border-yellow-700",
  green: "border-green-700",
  purple: "border-indigo-600",
  pink: "border-pink-500",
  blue: "border-sky-600",
};

export type Tag = {
  id: string;
  name: string;
  color: keyof typeof colorToClass;
};

export type Article = {
  image?: string;
  id?: string;
  title: string;
  Tags?: Tag[];
  description?: string;
  publishedAt: string;
  nextRelease?: boolean;
};

export enum propType {
  RICH_TEXT = "rich_text",
  CHECKBOX = "checkbox",
  TITLE = "title",
  MULTI = "multi_select",
}
