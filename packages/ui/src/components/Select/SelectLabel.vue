<script lang="ts">
import { tv } from "../../utils/tv";
import { eyebrow } from "../Eyebrow/Eyebrow.vue";

export const selectLabel = tv({
  extend: eyebrow,
  base: "px-2 py-1.5",
});
</script>

<script setup lang="ts">
import { SelectLabel, type SelectLabelProps } from "reka-ui";

export type Props = SelectLabelProps & {
  /** Extra classes, merged over the label classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SelectLabel
    :as="as"
    :as-child="asChild"
    :for="props.for"
    :class="selectLabel({ class: props.class })"
  >
    <slot></slot>
  </SelectLabel>
</template>
