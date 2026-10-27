<script lang="ts">
import { tv } from "../../utils/tv";
import { numberFieldIncrement } from "./NumberFieldIncrement.vue";

export const numberFieldDecrement = tv({
  extend: numberFieldIncrement,
  base: "[grid-area:decrement]",
  variants: {
    controls: {
      sides: "",
      stacked: "border-b-0",
    },
  },
});
</script>

<script setup lang="ts">
import { ChevronDown, Minus } from "@lucide/vue";
import { NumberFieldDecrement, type NumberFieldDecrementProps } from "reka-ui";

import { injectNumberFieldRootContext } from "./NumberFieldRoot.vue";

export type Props = NumberFieldDecrementProps & {
  /** Extra classes, merged over the decrement button classes. */
  class?: string;
};

const props = defineProps<Props>();

const { size, controls } = injectNumberFieldRootContext();
</script>

<template>
  <NumberFieldDecrement
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :class="numberFieldDecrement({ size, controls, class: props.class })"
  >
    <slot>
      <ChevronDown v-if="controls === 'stacked'" />
      <Minus v-else />
    </slot>
  </NumberFieldDecrement>
</template>
