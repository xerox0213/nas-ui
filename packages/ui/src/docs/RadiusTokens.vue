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
    <h2 class="text-heading-2 mb-4">Radius</h2>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      <div
        v-for="token in tokens"
        :key="token.name"
        :class="token.utility"
        :data-token="token.name"
        class="border-line bg-surface flex flex-col gap-1 border p-4"
      >
        <code class="text-label font-mono">{{ token.name }}</code>
        <span class="text-caption text-fg-muted font-mono">
          {{ token.utility }} · {{ values[token.name] }}
        </span>
      </div>
    </div>
  </div>
</template>
