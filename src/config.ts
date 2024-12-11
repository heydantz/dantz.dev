import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Dantz",
  profile: "#",
  desc: "",
  title: "@HeyDantz",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  blogEnabled: false,
  showArchives: false,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-MX"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 48,
  height: 48,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/heydantz",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "#",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "#",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/heydantz/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Platzi",
    href: "https://platzi.com/p/heydantz/",
    linkTitle: `${SITE.title} on Platzi`,
    active: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@heydantz",
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
  {
    name: "DEV",
    href: "https://dev.to/heydantz",
    linkTitle: `${SITE.title} on DEV`,
    active: true,
  },
  {
    name: "X",
    href: "#",
    linkTitle: `${SITE.title} on X`,
    active: false,
  },
  {
    name: "Discord",
    href: "#",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
];
