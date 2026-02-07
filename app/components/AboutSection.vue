<script setup lang="tsx">
import { aboutMeDescription } from '~/data/aboutMe';

const { data: experiences } = await useAsyncData(`home-page-experiences`, () => queryCollection('experience')
  .order('startDate', 'DESC')
  .limit(2)
  .all(),
);

const { data: amountOfExperiences } = await useAsyncData(`amount-of-experiences`, () => queryCollection('experience').count());
</script>

<template>
  <div class="space-y-6 md:space-y-8">
    <div class="grid md:grid-cols-2 gap-8 md:gap-16 mx-auto">
      <div class="space-y-4">
        <h2 class="text-3xl">
          <span class="highlight__blue">
            About Me
          </span>
        </h2>
        <p class="leading-relaxed">
          {{ aboutMeDescription }}
        </p>
      </div>
      <div
        v-if="experiences"
      >
        <h3 class="text-xl font-semibold">
          Work Experience
        </h3>
        <div
          v-for="exp, id in experiences"
          :key="exp.id"
          class="flex flex-col items-center"
        >
          <experience-item
            :exp="exp"
            class="transition-colors"
          />
          <USeparator
            v-if="id < experiences.length - 1"
            class="w-1/4"
          />
        </div>
      </div>
    </div>
    <div class="text-end">
      <UButton
        to="/about"
      >
        View all experiences ({{ amountOfExperiences }})
      </UButton>
    </div>
  </div>
</template>
