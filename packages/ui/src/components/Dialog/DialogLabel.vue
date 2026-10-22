<script lang="ts">
import { tv } from "../../utils/tv";

export const dialogLabel = tv({
  base: "font-mono text-meta text-fg-subtle uppercase",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the label classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="dialogLabel({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
