<script setup lang="tsx">
import type { BlogCollectionItem } from '@nuxt/content';

defineProps<{
  article: BlogCollectionItem;
}>();
</script>

<template>
  <NuxtLink
    :to="`/blog/${article.slug}`"
    class="p-4 dark:text-inverted dark:bg-primary dark:hover:bg-primary/90 rounded shadow hover:shadow-md transition-shadow"
  >
    <article class="space-y-4 flex flex-col h-full">
      <h3 class="text-lg font-semibold min-h-[2lh]">
        {{ article.title }}
      </h3>
      <p class="text-sm line-clamp-2 flex-grow">
        {{ article.description }}
      </p>
      <time class="text-xs">
        {{ new Date(article.createdAt).toLocaleDateString() }} · {{ article.timeToRead }} min read
      </time>
    </article>
  </NuxtLink>
</template>
