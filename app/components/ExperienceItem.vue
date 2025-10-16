<script setup lang="tsx">
import type { ExperienceCollectionItem } from '@nuxt/content';
import { defineProps } from 'vue';

defineProps<{
  exp: ExperienceCollectionItem;
}>();
</script>

<template>
  <article
    class="flex items-center p-4 w-full gap-4"
  >
    <div class="dark:bg-primary rounded-full h-14 w-14 flex items-center justify-center">
      <img
        :src="exp.logo"
        alt=""
        class="h-10 mx-auto object-contain"
      >
    </div>
    <header class="space-y-1">
      <time class="text-sm">
        {{ new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }}
        -
        {{ exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present' }}
      </time>
      <h3 class="font-medium">
        {{ exp.position }} at {{ exp.company }}
      </h3>
    </header>
  </article>
</template>
