<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  },
});

const buttonList = [
  { id: 'blog', label: 'Blog', link: '/blog' },
  { id: 'Latest Articles', label: 'Latest Articles', link: '/#latest-articles' },
  { id: 'about', label: 'About Me', link: '/#about' },
  { id: 'home', label: 'Home', link: '/' },
];

const route = useRoute();
const activeButtonId = computed(() => buttonList.find(button => route.fullPath.includes(button.link))?.id || 'blog');
</script>

<template>
  <UContainer
    as="header"
    class="hidden backdrop-blur-xs bg-default/80 sticky top-0 z-50 md:flex justify-between p-3"
  >
    <div />
    <nav class="flex items-center gap-8">
      <UButton
        v-for="button in buttonList.toReversed()"
        :key="button.id"
        variant="link"
        size="sm"
        class="font-medium"
        :class="{ 'underline decoration-2 underline-offset-3': activeButtonId === button.id }"
        :to="button.link"
        :label="button.label"
      />
    </nav>
    <ClientOnly v-if="!colorMode?.forced">
      <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        variant="ghost"
        size="sm"
        :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
        @click="isDark = !isDark"
      />
    </ClientOnly>
  </UContainer>
</template>
