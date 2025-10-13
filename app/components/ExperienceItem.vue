<script setup lang="tsx">
import { defineProps } from 'vue';
import type { Experience } from '~/data/aboutMe';

defineProps<{
  exp: Experience;
}>();
</script>

<template>
  <article
    class="flex justify-between items-center p-4 dark:text-inverted dark:bg-primary dark:hover:bg-primary/90 rounded shadow hover:shadow-md transition-shadow"
  >
    <header class="space-y-1">
      <p class="text-sm">
        {{ exp.period }}
      </p>
      <h3 class="font-medium">
        {{ exp.company }}
      </h3>
    </header>
    <div>
      <img
        :src="`/image/company/${exp.logo}`"
        alt=""
        class="h-8 mx-auto mt-1 object-contain"
      >
    </div>
  </article>
</template>
