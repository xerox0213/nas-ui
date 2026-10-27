<script lang="ts">
import { tv } from "../../utils/tv";

export const numberFieldIncrement = tv({
  base: [
    "inline-flex items-center justify-center border-inherit bg-control text-fg-subtle transition-[color,background-color] [grid-area:increment]",
    "not-data-disabled:hover:bg-hover not-data-disabled:hover:text-fg",
    "group-not-data-disabled:data-disabled:text-fg-subtle/50",
  ],
  variants: {
    size: {
      sm: "[&_svg]:size-3.5",
      md: "[&_svg]:size-4",
      lg: "[&_svg]:size-4",
    },
    controls: {
      sides: "",
      stacked: "border-b px-1.5",
    },
  },
  compoundVariants: [
    { controls: "sides", size: "sm", class: "p-1.5" },
    { controls: "sides", size: "md", class: "p-1.75" },
    { controls: "sides", size: "lg", class: "p-2.25" },
    { controls: "stacked", size: "sm", class: "[&_svg]:size-3" },
    { controls: "stacked", size: ["md", "lg"], class: "[&_svg]:size-3.5" },
  ],
});
</script>

<script setup lang="ts">
import { ChevronUp, Plus } from "@lucide/vue";
import { NumberFieldIncrement, type NumberFieldIncrementProps } from "reka-ui";

import { injectNumberFieldRootContext } from "./NumberFieldRoot.vue";

export type Props = NumberFieldIncrementProps & {
  /** Extra classes, merged over the increment button classes. */
  class?: string;
};

const props = defineProps<Props>();

const { size, controls } = injectNumberFieldRootContext();
</script>

<template>
  <NumberFieldIncrement
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :class="numberFieldIncrement({ size, controls, class: props.class })"
  >
    <slot>
      <ChevronUp v-if="controls === 'stacked'" />
      <Plus v-else />
    </slot>
  </NumberFieldIncrement>
</template>
