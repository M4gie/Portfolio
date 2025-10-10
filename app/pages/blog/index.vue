<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
    >
      <NuxtLink :to="`blog/${post.slug}`">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
