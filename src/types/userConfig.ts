import type { TablerIconsProps } from "@tabler/icons-react";

export type UserConfig = {
  title: string;
  username: string;
  description: string;
  theme: string;
  htmlTitle: string;
  complementHTMLTitle: string;
  url: string;
  keywords: string;
  links: UserLink[];
};

export type UserLink = {
  name: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  url: string;
};
