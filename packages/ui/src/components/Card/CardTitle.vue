<script lang="ts">
import { tv } from "../../utils/tv";

export const cardTitle = tv({
  base: "text-heading-4 text-fg",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the title classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardTitle({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
