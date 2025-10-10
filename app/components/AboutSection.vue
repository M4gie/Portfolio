<script setup lang="tsx">
const experience = ref([
  { id: 1, period: '2023 - Present', role: 'FullStack Developer', company: 'LeroyMerlin' },
  { id: 2, period: '2021 - 2023', role: 'FullStack Developer', company: 'Decathlon' },
  { id: 3, period: '2020 - 2021', role: 'FullStack Developer', company: 'ReactEurope' },
]);
</script>

<template>
  <UContainer>
    <div class="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
      <div class="space-y-4">
        <h2 class="text-3xl pastel-heading">
          About Me
        </h2>
        <p class="pastel-text-secondary leading-relaxed">
          As a UX/UI designer and front-end developer with 6 years of experience, I leverage my Boston University Interactive Design degree to craft user-centered digital experiences. My approach blends creative strategy with design thinking, transforming concepts into functional, purposeful digital products that seamlessly integrate design and technology.
        </p>
      </div>
      <div class="space-y-6">
        <h3 class="text-xl font-semibold pastel-heading">
          Work Experience
        </h3>
        <div class="space-y-4">
          <div
            v-for="exp in experience"
            :key="exp.id"
            class="flex justify-between items-start p-2 rounded-[var(--radius-lg)]"
          >
            <div class="space-y-1">
              <div class="text-sm pastel-text-tertiary">
                {{ exp.period }}
              </div>
              <div class="font-medium pastel-heading">
                {{ exp.role }}
              </div>
            </div>
            <div class="text-right">
              <div class="font-medium pastel-heading">
                {{ exp.company }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
