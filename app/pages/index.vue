<template>
  <div class="min-h-screen bg-[rgb(var(--pastel-background))] dark:bg-gray-950">
    <!-- Hero Section -->
    <section
      id="accueil"
      class="pastel-section"
    >
      <HeroSection />
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="pastel-section"
    >
      <AboutSection />
    </section>

    <!-- Articles Section -->
    <section
      id="articles"
      class="pastel-section-alt"
    >
      <ArticleSection />
    </section>

    <!-- Projects Section -->
    <section
      id="projects"
      class="pastel-section"
    >
      <ProjectSection />
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Emma Thompson - UX/UI Designer',
  meta: [
    { name: 'description', content: 'Minimalist portfolio of a UX/UI designer passionate about creating intuitive digital experiences' },
  ],
});
</script>
