<template>
  <div
    class="flex flex-col py-20 gap-y-10 md:p-8 md:py-24 md:gap-y-24 lg:py-32"
  >
    <section id="hero">
      <HeroSection />
    </section>

    <USeparator
      id="about"
      class="max-w-2xl self-center"
    />

    <section>
      <AboutSection />
    </section>

    <USeparator
      id="latest-articles"
      class="max-w-2xl self-center"
    />

    <section>
      <ArticleSection />
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Steeven Regnault - FullStack Developer',
  meta: [
    { name: 'description', content: 'Minimalist portfolio of a UX/UI designer passionate about creating intuitive digital experiences' },
  ],
});
</script>
