declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    datadogRumApplicationId: string;
    datadogRumClientToken: string;
    datadogRumEnv: string;
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {};
