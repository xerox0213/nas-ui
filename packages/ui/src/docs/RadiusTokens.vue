<script setup lang="ts">
import { onMounted, ref } from "vue";

export type RadiusToken = {
  name: string;
  utility: string;
};

defineProps<{
  tokens: RadiusToken[];
}>();

const root = ref<HTMLElement>();
const values = ref<Record<string, string>>({});

onMounted(() => {
  root.value?.querySelectorAll<HTMLElement>("[data-token]").forEach((el) => {
    values.value[el.dataset.token ?? ""] = getComputedStyle(el).borderRadius;
  });
});
</script>

<template>
  <div ref="root" class="p-6">
    <h2 class="mb-4 text-heading-2">Radius</h2>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      <div
        v-for="token in tokens"
        :key="token.name"
        :class="token.utility"
        :data-token="token.name"
        class="flex flex-col gap-1 border border-line bg-surface p-4"
      >
        <code class="font-mono text-label">{{ token.name }}</code>
        <span class="font-mono text-caption text-fg-muted">
          {{ token.utility }} · {{ values[token.name] }}
        </span>
      </div>
    </div>
  </div>
</template>
