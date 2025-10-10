<script setup lang="tsx">
const articles = ref([
  {
    id: 1,
    title: 'Getting Started with Nuxt 3',
    description: 'Learn how to build modern applications with Nuxt 3 and Vue 3 composition API.',
    date: 'Jan 15, 2024',
    category: 'Tutorial',
    icon: 'i-heroicons-code-bracket',
    gradient: 'pastel-gradient-blue',
    badge: 'pastel-badge-blue',
  },
  {
    id: 2,
    title: 'Minimalist Design Principles',
    description: 'Key principles and techniques for creating clean and effective user interfaces.',
    date: 'Jan 10, 2024',
    category: 'Design',
    icon: 'i-heroicons-sparkles',
    gradient: 'pastel-gradient-purple',
    badge: 'pastel-badge-purple',
  },
  {
    id: 3,
    title: 'TypeScript Best Practices',
    description: 'Advanced tips for mastering TypeScript in your modern web projects.',
    date: 'Jan 5, 2024',
    category: 'Development',
    icon: 'i-heroicons-light-bulb',
    gradient: 'pastel-gradient-green',
    badge: 'pastel-badge-green',
  },
]);
</script>

<template>
  <UContainer>
    <div class="space-y-12 max-w-5xl mx-auto">
      <div class="space-y-2">
        <h2 class="text-3xl pastel-heading">
          Latest Articles
        </h2>
        <p class="pastel-text-secondary">
          Thoughts, tutorials and insights
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <ArticleItem
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="group cursor-pointer"
        />
      </div>

      <div class="text-center pt-4">
        <button class="pastel-btn-blue">
          View all articles
          <UIcon
            name="i-heroicons-arrow-right-20-solid"
            class="ml-2"
          />
        </button>
      </div>
    </div>
  </UContainer>
</template>
