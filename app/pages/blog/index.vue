<script setup lang="ts">
const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <ul
    class="max-w-xl py-10 md:py-20 flex flex-col mx-auto"
  >
    <li
      v-for="article, id in articles"
      :key="article.id"
    >
      <NuxtLink :to="`blog/${article.slug}`">
        <article>
          <header class="flex items-center justify-between mb-1 text-xs">
            <time>
              {{ new Date(article.createdAt).toLocaleDateString() }}
            </time>
            <p>
              {{ article.timeToRead }} min read
            </p>
          </header>
          <h2 class="text-md md:text-xl font-bold mb-2">
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
  </ul>
</template>
