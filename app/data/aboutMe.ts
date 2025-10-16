export type ExperienceTag = {
  name: string;
  badge: string;
};

export type Tags
  = 'vue' | 'nuxt' | 'react' | 'svelte'
    | 'node' | 'adonis' | 'graphql'
    | 'docker'
    | 'typescript';

export const experienceTags: { [t in Tags]: ExperienceTag } = {
  // Frontend
  vue: {
    name: 'Vue.js',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  },
  nuxt: {
    name: 'Nuxt',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  },
  react: {
    name: 'React',
    badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  },
  svelte: {
    name: 'Svelte',
    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  },

  // Backend
  node: {
    name: 'Node.js',
    badge: 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
  },
  adonis: {
    name: 'Adonis.js',
    badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  },
  graphql: {
    name: 'GraphQL',
    badge: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  },

  // Ops
  docker: {
    name: 'Docker',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  },

  // Languages
  typescript: {
    name: 'TypeScript',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  },
} as const;
