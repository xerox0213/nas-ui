<script lang="ts">
import { tv } from "../../utils/tv";

export const alertDescription = tv({
  base: "col-start-2 col-end-3 row-start-2 row-end-3 mt-0.5 text-fg-muted",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  as: "p",
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="alertDescription({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
