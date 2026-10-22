<script lang="ts">
import { tv } from "../../utils/tv";

export const cardRoot = tv({
  base: "relative isolate rounded-surface border border-line bg-surface",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the base classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardRoot({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
