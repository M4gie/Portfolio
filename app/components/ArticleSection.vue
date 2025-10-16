<script setup lang="tsx">
const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <div class="space-y-6 md:space-y-8 mx-auto">
    <div class="space-y-2">
      <h2 class="text-3xl">
        <span class="highlight__yellow">Latest Articles</span>
      </h2>
      <p>
        Thoughts, tutorials and insights
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <ArticleItem
        v-for="article in articles"
        :key="article.id"
        :article
      />
    </div>
    <div class="text-end">
      <UButton to="/blog">
        View all articles
        <UIcon
          name="i-heroicons-arrow-right-20-solid"
          class="ml-2"
        />
      </UButton>
    </div>
  </div>
</template>
