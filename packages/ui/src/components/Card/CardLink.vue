<script lang="ts">
import { tv } from "../../utils/tv";

export const cardLink = tv({
  base: [
    "focus-visible:outline-none",
    "before:absolute before:-inset-px before:rounded-surface before:border before:border-transparent before:transition-colors",
    "hover:before:border-line-control-hover focus-visible:before:focus-ring",
  ],
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the link classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardLink({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
