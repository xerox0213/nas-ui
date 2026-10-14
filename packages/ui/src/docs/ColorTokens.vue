<script setup lang="ts">
export type ColorToken = {
  name: string;
  utility: string;
};

export type ColorGroup = {
  name: string;
  tokens: ColorToken[];
};

defineProps<{
  groups: ColorGroup[];
}>();
</script>

<template>
  <div class="flex flex-col gap-10 p-6">
    <section v-for="group in groups" :key="group.name">
      <h2 class="text-heading-2 mb-4">{{ group.name }}</h2>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        <div
          v-for="token in group.tokens"
          :key="token.name"
          class="border-line bg-surface rounded-surface overflow-hidden border"
        >
          <div
            class="border-line h-16 border-b"
            :style="{ background: `var(--color-${token.name})` }"
          />

          <div class="flex flex-col gap-1 p-3">
            <code class="text-label font-mono">--color-{{ token.name }}</code>
            <span class="text-caption text-fg-muted font-mono">
              {{ token.utility }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
