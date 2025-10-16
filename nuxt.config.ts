// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxtjs/mdc', '@nuxt/image'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
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
  runtimeConfig: {
    public: {
      datadogRumApplicationId: process.env.NUXT_DATADOG_RUM_APPLICATION_ID || 'MISSING_DATADOG_APPLICATION_ID',
      datadogRumClientToken: process.env.NUXT_DATADOG_RUM_CLIENT_TOKEN || 'MISSING_DATADOG_CLIENT_TOKEN',
      datadogRumEnv: process.env.NUXT_DATADOG_RUM_ENV || 'dev',
    },
  }, compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'blog',
            database_id: '80a4e647-23e6-48f7-aeb7-31a48bd4b3ed',
          },
        ],
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  image: {
    format: ['webp'],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 96,
          height: 96,
        },
      },
    },
  },
});
