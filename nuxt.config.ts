// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/mdc',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    experimental: { sqliteConnector: 'native' },
    build: {
      transformers: [
        '~/transformers/blog-slug.ts',
      ],
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
