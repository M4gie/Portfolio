<script setup lang="tsx">
const buttonList = [
  { id: 'projects', label: 'Projects', link: '/#projects' },
  { id: 'blog', label: 'Blog', link: '/blog' },
  { id: 'about', label: 'About Me', link: '/#about' },
  { id: 'home', label: 'Home', link: '/' },
];

const route = useRoute();
const activeButtonId = computed(() => buttonList.find(button => route.fullPath.includes(button.link))?.id || 'blog');
</script>

<template>
  <header class="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 sticky top-0 z-50">
    <UContainer>
      <div class="flex items-center justify-center h-16">
        <nav class="flex items-center gap-8">
          <UButton
            v-for="button in buttonList.toReversed()"
            :key="button.id"
            variant="link"
            color="gray"
            size="sm"
            class="pastel-text-primary font-medium hover:pastel-text-secondary transition-colors"
            :class="{ 'underline decoration-2 underline-offset-3': activeButtonId === button.id }"
            :to="button.link"
            :label="button.label"
          />
        </nav>
      </div>
    </UContainer>
  </header>
</template>
