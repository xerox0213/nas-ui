<script lang="ts">
import { tv } from "../../utils/tv";

export const tabsTriggerNumber = tv({
  base: [
    "text-fg-subtle group-hover:text-fg-muted group-data-[state=active]:text-fg-muted",
    "before:content-[counter(tabs,decimal-leading-zero)]",
    "transition-colors group-data-disabled:text-fg-disabled",
  ],
});
</script>

<script setup lang="ts">
export type Props = {
  /** Extra classes, merged over the number classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <span :class="tabsTriggerNumber({ class: props.class })"></span>
</template>
