<script lang="ts">
import { tv } from "../../utils/tv";

export const cardHeader = tv({
  base: "flex items-center justify-between border-b border-line px-4 py-2 [&_svg]:size-3.5 [&_svg]:shrink-0",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the header classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardHeader({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
