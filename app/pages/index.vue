<template>
  <div class="flex flex-col p-8 py-12 gap-y-16">
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <USeparator
      id="about"
      class="max-w-2xl self-center"
    />

    <!-- About Section -->
    <section>
      <AboutSection />
    </section>

    <USeparator
      id="latest-articles"
      class="max-w-2xl self-center"
    />

    <!-- Articles Section -->
    <section>
      <ArticleSection />
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Steeven Regnault - UX/UI Designer & Frontend Developer',
  meta: [
    { name: 'description', content: 'Minimalist portfolio of a UX/UI designer passionate about creating intuitive digital experiences' },
  ],
});
</script>
