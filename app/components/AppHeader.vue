<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Home',
  to: '/',
  active: route.path === '/',
},
{
  label: 'About Me',
  to: '/about',
  active: route.path.includes('/about'),
}, {
  label: 'Blog',
  to: '/blog',
  active: route.path.includes('/blog'),
},
]);
</script>

<template>
  <UHeader
    mode="drawer"
    title=""
    class="backdrop-blur-xs bg-default/80"
  >
    <UNavigationMenu
      :items="items"
      highlight
      color="primary"
      highlight-color="primary"
      :ui="{
        link: 'py-0 after:-bottom-0.5',
        item: 'py-0',
        list: 'gap-6',

      }"
    />
    <template #right>
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
