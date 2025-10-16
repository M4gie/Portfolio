<script setup lang="tsx">
import type { BlogCollectionItem } from '@nuxt/content';

defineProps<{
  article: BlogCollectionItem;
}>();
</script>

<template>
  <NuxtLink
    :to="`/blog/${article.slug}`"
    class="p-4 rounded bg-primary/8 hover:bg-primary/12 transition-colors h-full flex flex-col"
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
