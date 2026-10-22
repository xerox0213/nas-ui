<script lang="ts">
import { tv } from "../../utils/tv";

export const cardIntro = tv({
  base: "flex flex-col gap-1",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the intro classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cardIntro({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
