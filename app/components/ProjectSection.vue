<script setup lang="tsx">
const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with integrated payments and inventory management.',
    technologies: [
      { name: 'Nuxt 3', badge: 'pastel-badge-blue' },
      { name: 'Stripe', badge: 'pastel-badge-purple' },
      { name: 'Prisma', badge: 'pastel-badge-green' },
    ],
    icon: 'i-heroicons-shopping-cart',
    gradient: 'pastel-gradient-orange',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard with real-time data visualization and insights.',
    technologies: [
      { name: 'Vue 3', badge: 'pastel-badge-green' },
      { name: 'Chart.js', badge: 'pastel-badge-blue' },
      { name: 'Tailwind', badge: 'pastel-badge-purple' },
    ],
    icon: 'i-heroicons-chart-bar',
    gradient: 'pastel-gradient-blue',
  },
  {
    id: 3,
    title: 'Social Network App',
    description: 'Social application with instant messaging and content sharing features.',
    technologies: [
      { name: 'Nuxt', badge: 'pastel-badge-purple' },
      { name: 'Socket.io', badge: 'pastel-badge-rose' },
      { name: 'MongoDB', badge: 'pastel-badge-green' },
    ],
    icon: 'i-heroicons-chat-bubble-left-right',
    gradient: 'pastel-gradient-lavender',
  },
  {
    id: 4,
    title: 'Portfolio Builder',
    description: 'Online portfolio creation tool with customizable templates.',
    technologies: [
      { name: 'Nuxt UI', badge: 'pastel-badge-blue' },
      { name: 'Supabase', badge: 'pastel-badge-green' },
      { name: 'TypeScript', badge: 'pastel-badge-purple' },
    ],
    icon: 'i-heroicons-window',
    gradient: 'pastel-gradient-mint',
  },
]);
</script>

<template>
  <UContainer>
    <div class="space-y-12 max-w-5xl mx-auto">
      <div class="space-y-2">
        <h2 class="text-3xl pastel-heading">
          Selected Projects
        </h2>
        <p class="pastel-text-secondary">
          A showcase of recent work
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project
        />
      </div>
    </div>
  </UContainer>
</template>
