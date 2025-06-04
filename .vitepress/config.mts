import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Server Cosmetics Documentation",
  description: "Documentation for Server Cosmetics",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/pages/Getting Started' },
          { text: 'Configuration', link: '/pages/Configuration' },
          { text: 'Commands', link: '/pages/Commands' },
          { text: 'Formatting', link: '/pages/Formatting' },
          { text: 'Adding cosmetics and skins', link: '/pages/Adding cosmetics and skins' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
