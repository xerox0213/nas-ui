<script lang="ts">
import { tv } from "../../utils/tv";

export const alertActions = tv({
  base: "col-start-2 col-end-3 row-start-3 row-end-4 mt-3 flex flex-wrap items-center gap-2",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the actions classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="alertActions({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
