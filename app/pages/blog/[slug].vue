<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog')
    .where('slug', '=', slug)
    .first();
});

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description,
// });
</script>

<template>
  <UContainer
    v-if="post"
    class="max-w-4xl py-8"
  >
    <div class="flex justify-between">
      <UButton
        variant="link"
        size="sm"
        class="mb-4"
        to="/blog"
        icon="i-lucide-arrow-left"
        label="Back to Blog"
      />
      <time class="text-sm text-muted-foreground self-center">
        {{ new Date(post.createdAt).toLocaleDateString() }} · {{ post.timeToRead }} min read
      </time>
    </div>
    <h1 class="text-4xl">
      {{ post.title }}
    </h1>
    <ContentRenderer
      :value="post"
    />
    <UButton
      variant="link"
      size="sm"
      class="mb-4"
      to="/blog"
      icon="i-lucide-arrow-left"
      label="Back to Blog"
    />
  </UContainer>
</template>
