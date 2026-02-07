<script lang="ts" setup>
const profilePics = [
  '/images/me/devfest.webp',
  '/images/me/mountain.webp',
];

const randomIndex = Math.floor(Math.random() * profilePics.length);
const selectedProfilePic = profilePics[randomIndex];
</script>

<template>
  <div
    class="max-w-3xl mx-auto text-center space-y-8"
  >
    <div class="inline-block">
      <NuxtImg
        preset="avatar"
        loading="lazy"
        :src="selectedProfilePic"
        :custom="false"
        width="96"
        height="96"
        class="ring-2 ring-offset-3 rounded-full"
      />
    </div>
    <div class="space-y-6">
      <p class="text-4xl/10 md:text-6xl/17 tracking-tight">
        <span class="hidden md:inline">👋 I'm </span><span class="highlight__green">Steeven Regnault</span><br>FullStack Developer
      </p>
      <p class="text-lg/6 md:text-lg/6 max-w-2xl mx-auto text-secondary">
        I craft intuitive digital experiences where design meets functionality.
      </p>
    </div>
  </div>
</template>
