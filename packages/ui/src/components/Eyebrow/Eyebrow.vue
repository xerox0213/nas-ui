<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

import { eyebrow } from "./eyebrow.theme";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the eyebrow classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  as: "span",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="eyebrow({ class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
