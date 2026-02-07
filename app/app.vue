<script setup lang="ts">
import { datadogRum } from '@datadog/browser-rum';

const config = useRuntimeConfig();

onBeforeMount(() => {
  const { datadogRumApplicationId, datadogRumClientToken, datadogRumEnv } = config.public;
  if (!datadogRumApplicationId || !datadogRumClientToken || !datadogRumEnv || datadogRumEnv !== 'prod') {
    return;
  }
  datadogRum.init({
    applicationId: datadogRumApplicationId,
    clientToken: datadogRumClientToken,
    site: 'datadoghq.com',
    service: 'portfolio',
    env: datadogRumEnv,
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 5,
    trackBfcacheViews: true,
    defaultPrivacyLevel: 'mask-user-input',
  });
});
</script>

<template>
  <UApp>
    <UContainer class="min-h-screen flex flex-col">
      <AppHeader />
      <div class="grow">
        <NuxtPage />
      </div>
      <AppFooter />
    </UContainer>
  </UApp>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.highlight__red {
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 20, 0, 0.2),
    rgba(255, 20, 0, 0.7) 95%,
    rgba(255, 20, 0, 0.1)
  );
}

.highlight__purple {
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(200, 0, 255, 0.2),
    rgba(200, 0, 255, 0.7) 95%,
    rgba(200, 0, 255, 0.1)
  );
}

.highlight__yellow {
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 200, 0, 0.2),
    rgba(255, 200, 0, 0.7) 95%,
    rgba(255, 200, 0, 0.1)
  );
}

.highlight__blue {
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(0, 100, 255, 0.2),
    rgba(0, 100, 255, 0.7) 95%,
    rgba(0, 100, 255, 0.1)
  );
}

.highlight__green {
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(0, 200, 100, 0.2),
    rgba(0, 200, 100, 0.7) 95%,
    rgba(0, 200, 100, 0.1)
  );
}
</style>
