<script setup lang="tsx">
import { aboutMeDescription } from '~/data/aboutMe';

const { data: experiences } = await useAsyncData(`all-experiences`, () => queryCollection('experience')
  .order('startDate', 'DESC')
  .all(),
);

const formattedExperience = computed(() => {
  return experiences.value?.map(exp => ({
    date: exp.startDate && exp.endDate
      ? `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
      : exp.startDate
        ? `Since ${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
        : 'N/A',
    ...exp,
  })) || [];
});
</script>

<template>
  <section
    class="flex flex-col py-20 gap-y-10 md:p-8 md:py-24 md:gap-y-24 lg:py-32"
  >
    <div class="space-y-4 text-center max-w-2xl mx-auto">
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
      v-if="formattedExperience"
      class="space-y-8"
    >
      <UTimeline
        :items="formattedExperience"
        layout="vertical"
        :ui="{
          indicator: 'size-14',
        }"
      >
        <template #indicator="{ item }">
          <logo-container
            :src="item.logo"
            :alt="item.company"
            width="xl"
          />
        </template>
        <template #date="{ item }">
          <time class="text-sm text-secondary">
            {{ item.date }}
          </time>
        </template>
        <template #title="{ item }">
          <h3 class="font-medium text-lg text-primary pb-1">
            {{ item.position }} at <NuxtLink
              :to="item.website"
              target="_blank"
              class="underline"
            >{{ item.company }}</NuxtLink>
          </h3>
          <div class="pb-2">
            <UBadge
              v-for="tech in item.skills"
              :key="tech"
              class="mr-2"
              variant="outline"
              size="sm"
            >
              {{ tech }}
            </UBadge>
          </div>
        </template>
        <template #description="{ item }">
          <p class="whitespace-pre-line text-secondary">
            <ContentRenderer
              :value="item.meta"
            />
          </p>
        </template>
      </UTimeline>
    </div>
  </section>
</template>
