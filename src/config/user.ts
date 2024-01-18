import type { UserConfig } from "@/types/userConfig";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export const USER_CONFIG: UserConfig = {
  title: "Agus",
  username: "9gustin",
  description:
    "Hola! soy Agus, desarrollador frontend. En este blog escribo sobre cositas que me parecen interesantes",
  theme: "react",
  htmlTitle: "Blog | 9gustin",
  complementHTMLTitle: " | 9gustin",
  url: "https://9gustin.com",
  keywords: "Artículos, recursos, Desarollo Web, Frontend, JavaScript, React",
  links: [
    {
      name: "Github",
      icon: IconBrandGithub,
      url: "https://github.com/9gustin",
    },
    {
      name: "Twitter",
      icon: IconBrandX,
      url: "https://twitter.com/9gustin",
    },
    {
      name: "Linkedin",
      icon: IconBrandLinkedin,
      url: "https://www.linkedin.com/in/9gustin/",
    },
  ],
};
