<script lang="ts">
import { tv } from "../../utils/tv";

export const cardBody = tv({
  base: "flex flex-col gap-4 p-4",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the body classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardBody({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
