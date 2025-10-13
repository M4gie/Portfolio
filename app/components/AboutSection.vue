<script setup lang="tsx">
import { experiences } from '~/data/aboutMe';
</script>

<template>
  <UContainer>
    <div class="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
      <div class="space-y-4">
        <h2 class="text-3xl">
          <span class="highlight__blue">
            About Me
          </span>
        </h2>
        <p class="leading-relaxed">
          As a UX/UI designer and front-end developer with 6 years of experience, I leverage my Boston University Interactive Design degree to craft user-centered digital experiences. My approach blends creative strategy with design thinking, transforming concepts into functional, purposeful digital products that seamlessly integrate design and technology.
        </p>
      </div>
      <div class="space-y-6">
        <h3 class="text-xl font-semibold">
          Work Experience
        </h3>
        <div class="space-y-2 flex flex-col justify-end">
          <experience-item
            v-for="exp in experiences.slice(0, 2)"
            :key="exp.id"
            :exp="exp"
            class="transition-colors"
          />
          <div class="text-end">
            <UButton
              to="/about"
            >
              View all experiences ({{ experiences.length }})
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
