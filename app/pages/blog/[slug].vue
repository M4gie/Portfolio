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
  {{ slug }}
  <ContentRenderer
    v-if="post"
    :value="post"
  />
  <div v-else>
    Home not found
  </div>
</template>
