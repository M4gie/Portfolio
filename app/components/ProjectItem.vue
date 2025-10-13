<script setup lang="tsx">
defineProps<{
  project: {
    id: number;
    title: string;
    description: string;
    icon: string;
    gradient: string;
    technologies: { name: string; badge: string }[];
  };
}>();
</script>

<template>
  <div
    class="group cursor-pointer"
  >
    <div class="space-y-4">
      <div
        :class="project.gradient"
        class="aspect-[16/10] rounded-[var(--radius-lg)] flex items-center justify-center overflow-hidden"
      >
        <UIcon
          :name="project.icon"
          class="text-7xl text-white/90"
        />
      </div>
      <div class="space-y-3">
        <h3 class="text-xl font-semibold group-hover:text-gray-600 transition-colors">
          {{ project.title }}
        </h3>
        <p class="text-sm">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech.name"
            :class="tech.badge"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
