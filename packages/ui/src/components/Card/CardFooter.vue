<script lang="ts">
import { tv } from "../../utils/tv";

export const cardFooter = tv({
  base: "flex flex-col-reverse gap-2 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-end",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the footer classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardFooter({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
