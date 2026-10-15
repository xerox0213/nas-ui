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
      <h2 class="mb-4 text-heading-2">{{ group.name }}</h2>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        <div
          v-for="token in group.tokens"
          :key="token.name"
          class="overflow-hidden rounded-surface border border-line bg-surface"
        >
          <div
            class="h-16 border-b border-line"
            :style="{ background: `var(--color-${token.name})` }"
          />

          <div class="flex flex-col gap-1 p-3">
            <code class="font-mono text-label">--color-{{ token.name }}</code>
            <span class="font-mono text-caption text-fg-muted">
              {{ token.utility }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
