<script setup lang="tsx">
const { alt = '', width = 'md' } = defineProps<{
  src: string;
  alt?: string;
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}>();

const imageClass = computed(() => {
  switch (width) {
    case 'sm':
      return {
        container: 'h-8 w-8',
        image: 'h-6',
      };
    case 'md':
      return {
        container: 'h-10 w-10',
        image: 'h-8',
      };
    case 'lg':
      return {
        container: 'h-12 w-12',
        image: 'h-10',
      };
    case 'xl':
      return {
        container: 'h-14 w-14',
        image: 'h-12',
      };
    case '2xl':
      return {
        container: 'h-20 w-20',
        image: 'h-16',
      };
    default:
      return {
        container: 'h-8 w-8',
        image: 'h-6',
      };
  }
});
</script>

<template>
  <div :class="`dark:bg-primary rounded-full flex items-center justify-center ${imageClass.container}`">
    <img
      :src="src"
      :alt="alt"
      :class="`${imageClass.image} object-contain`"
    >
  </div>
</template>
