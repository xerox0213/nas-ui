<script lang="ts">
import { tv } from "../../utils/tv";

export const cardDescription = tv({
  base: "text-fg-muted",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardDescription({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
