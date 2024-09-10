// .vitepress/config.js
export default {
  title: 'Rokuro Inosuke',
  description: 'Indonesian Content Creator Gaming',

  themeConfig: {
    logo: "/me.jpg",
    siteTitle: "Rokuro Inosuke",
    nav: [
    { text: "Project", link: "/project/"},
    { text: "Blog", link: "/blog/"},
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    ],
    socialLinks: [
    { icon: "github", link: "https://github.com/teguhsbl" },
    { icon: "facebook", link: "https://fb.me/sabilateguh" },
    ],
    footer: {
   message: "This Portofolio build with Vitepress.",
   copyright: "Copyright © 2024-present Rokuro Inosuke",
 },
  },
}
