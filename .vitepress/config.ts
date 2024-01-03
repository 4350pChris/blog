import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ennen.dev Blog",
  description: "Just my personal blog. Built with vitepress.",
  base: process.env.BASE_URL,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Posts",
        items: [
          { text: "Lyrics Analyzer", link: "/lyrics-analyzer" },
          // { text: "Slack Vuesualizer", link: "/slack-vuesualizer" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/4350pChris" }],
  },
});
