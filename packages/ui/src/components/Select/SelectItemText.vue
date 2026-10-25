<script lang="ts">
import { tv } from "../../utils/tv";

export const selectItemText = tv({
  base: "inline-flex grow items-center gap-2",
});
</script>

<script setup lang="ts">
import { SelectItemText, type SelectItemTextProps } from "reka-ui";

export type Props = SelectItemTextProps & {
  /** Extra classes, merged over the text classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SelectItemText :as="as" :as-child="asChild" :class="selectItemText({ class: props.class })">
    <slot></slot>
  </SelectItemText>
</template>
