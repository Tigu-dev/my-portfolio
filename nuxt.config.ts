export default defineNuxtConfig({
  compatibilityDate: '2026-10-06',
  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/base.css',
    '~/assets/css/decor.css',
    '~/assets/css/reveal.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      bodyAttrs: { class: 'grain' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },
})
