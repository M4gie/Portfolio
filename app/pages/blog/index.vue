<script setup lang="ts">
const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <UContainer
    as="ul"
    class="max-w-xl py-8 flex flex-col"
  >
    <li
      v-for="article, id in articles"
      :key="article.id"
    >
      <NuxtLink :to="`blog/${article.slug}`">
        <article>
          <header class="flex items-center justify-between mb-1 text-sm">
            <time>
              {{ new Date(article.createdAt).toLocaleDateString() }}
            </time>
            <p>
              {{ article.timeToRead }} min read
            </p>
          </header>
          <h2 class="text-2xl font-bold mb-2">
            {{ article.title }}
          </h2>
          <p>
            {{ article.description }}
          </p>
        </article>
      </NuxtLink>
      <USeparator
        v-if="articles && id < articles?.length - 1"
        class="my-6"
      />
    </li>
  </UContainer>
</template>
