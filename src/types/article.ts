export type Article = {
  image?: string;
  id?: string;
  title: string;
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
