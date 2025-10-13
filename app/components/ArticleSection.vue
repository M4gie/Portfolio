<script setup lang="tsx">
const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <UContainer>
    <div class="space-y-12 max-w-5xl mx-auto">
      <div class="space-y-2">
        <h1 class="text-3xl">
          <span class="highlight__yellow">Latest Articles</span>
        </h1>
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

      <div class="text-center pt-4">
        <UButton to="/blog">
          View all articles
          <UIcon
            name="i-heroicons-arrow-right-20-solid"
            class="ml-2"
          />
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
