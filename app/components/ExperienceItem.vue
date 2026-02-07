<script setup lang="tsx">
import type { ExperienceCollectionItem } from '@nuxt/content';

defineProps<{
  exp: ExperienceCollectionItem;
}>();
</script>

<template>
  <article
    class="flex items-center p-4 w-full gap-4"
  >
    <logo-container
      :src="exp.logo"
      :alt="exp.company"
      width="lg"
    />
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
