<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

import { injectCardContext } from "./card.context";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the header classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectCardContext();
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="ui.header({ class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
