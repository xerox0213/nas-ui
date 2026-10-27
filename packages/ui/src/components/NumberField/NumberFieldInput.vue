<script lang="ts">
import { tv } from "../../utils/tv";

export const numberFieldInput = tv({
  base: "min-w-0 border-inherit bg-control [grid-area:input] focus-visible:outline-none",
  variants: {
    size: {
      sm: "px-2.5 py-1.25",
      md: "px-3 py-1.25",
      lg: "px-4 py-1.75",
    },
    controls: {
      sides: "text-center not-first:border-l not-last:border-r",
      stacked: "border-r",
    },
  },
});
</script>

<script setup lang="ts">
import { NumberFieldInput, type NumberFieldInputProps } from "reka-ui";

import { injectNumberFieldRootContext } from "./NumberFieldRoot.vue";

export type Props = NumberFieldInputProps & {
  /** Extra classes, merged over the input classes. */
  class?: string;
};

const props = defineProps<Props>();

const { size, controls, invalid } = injectNumberFieldRootContext();
</script>

<template>
  <NumberFieldInput
    :as="as"
    :as-child="asChild"
    :aria-invalid="invalid || undefined"
    :class="numberFieldInput({ size, controls, class: props.class })"
  >
    <slot></slot>
  </NumberFieldInput>
</template>
