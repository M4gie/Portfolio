<template>
  <footer class="py-6 border-t border-[rgb(var(--pastel-border))]/30">
    <UContainer>
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center space-y-6">
          <div class="flex gap-4">
            <UButton
              icon="i-simple-icons-github"
              variant="ghost"
              color="gray"
              size="lg"
              square
              class="hover:bg-[rgb(var(--pastel-blue-light))] transition-colors"
            />
            <UButton
              icon="i-simple-icons-linkedin"
              variant="ghost"
              color="gray"
              size="lg"
              square
              class="hover:bg-[rgb(var(--pastel-purple-light))] transition-colors"
            />
            <UButton
              icon="i-heroicons-envelope"
              variant="ghost"
              color="gray"
              size="lg"
              square
              class="hover:bg-[rgb(var(--pastel-rose-light))] transition-colors"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
