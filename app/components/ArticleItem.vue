<script setup lang="tsx">
defineProps<{
  article: {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    icon: string;
    gradient: string;
    badge: string;
  };
}>();
</script>

<template>
  <div
    class="group cursor-pointer"
  >
    <div class="space-y-4">
      <div
        :class="article.gradient"
        class="aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden shadow-pastel shadow-pastel-hover"
      >
        <div class="w-full h-full flex items-center justify-center backdrop-blur-sm">
          <UIcon
            :name="article.icon"
            class="text-5xl text-white/90"
          />
        </div>
      </div>
      <div class="space-y-2">
        <span
          :class="article.badge"
          class="pastel-badge"
        >{{ article.category }}</span>
        <h3 class="text-lg font-semibold pastel-heading group-hover:text-gray-600 transition-colors">
          {{ article.title }}
        </h3>
        <p class="text-sm pastel-text-secondary line-clamp-2">
          {{ article.description }}
        </p>
        <div class="text-xs pastel-text-tertiary">
          {{ article.date }}
        </div>
      </div>
    </div>
  </div>
</template>
