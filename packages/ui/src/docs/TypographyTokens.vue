<script setup lang="ts">
import { onMounted, ref } from "vue";

export type TypographyToken = {
  name: string;
  utility: string;
};

export type TypographyGroup = {
  name: string;
  tokens: TypographyToken[];
};

defineProps<{
  groups: TypographyGroup[];
}>();

const sample = "The quick brown fox jumps over the lazy dog";

const root = ref<HTMLElement>();
const specs = ref<Record<string, string>>({});

onMounted(() => {
  root.value?.querySelectorAll<HTMLElement>("[data-token]").forEach((el) => {
    const style = getComputedStyle(el);
    const family = style.fontFamily.split(",")[0]?.replaceAll('"', "");

    specs.value[el.dataset.token ?? ""] = [
      family,
      `${style.fontSize} / ${style.lineHeight}`,
      style.fontWeight,
      style.letterSpacing === "normal" ? undefined : style.letterSpacing,
    ]
      .filter(Boolean)
      .join(" · ");
  });
});
</script>

<template>
  <div ref="root" class="flex flex-col gap-10 p-6">
    <section v-for="group in groups" :key="group.name">
      <h2 class="mb-4 text-heading-2">{{ group.name }}</h2>

      <div class="flex flex-col gap-4">
        <div
          v-for="token in group.tokens"
          :key="token.name"
          class="flex flex-col gap-3 rounded-surface border border-line bg-surface p-4"
        >
          <p :class="token.utility" :data-token="token.name" class="truncate">
            {{ sample }}
          </p>

          <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <code class="font-mono text-label">{{ token.name }}</code>
            <span class="font-mono text-caption text-fg-muted">
              {{ token.utility }}
            </span>
            <span class="font-mono text-caption text-fg-muted">
              {{ specs[token.name] }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
