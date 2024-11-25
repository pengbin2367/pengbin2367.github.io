import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QingKe",
  base: "/",
  lastUpdated: true,
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "不知道", link: "/read/Index" },
      { text: "不清楚", link: "/look/Index" },
    ],

    sidebar: {
      "/read/": [
        {
          text: "阅读",
          items: [{ text: "Index", link: "/read/Index" }],
        },
      ],
      "/look/": [
        {
          text: "观影",
          items: [
            {
              text: "Index",
              link: "/look/Index",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/pengbin2367" }],
  },
});
