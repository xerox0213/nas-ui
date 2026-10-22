<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import { type Component } from "vue";

import { button, type ButtonVariants } from "./button.theme";

export type Props = {
  /** Element or component to render as. */
  as?: Component | AsTag;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Visual style. */
  variant?: ButtonVariants["variant"];
  /** Button size. */
  size?: ButtonVariants["size"];
  /** Disables the button. */
  disabled?: boolean;
  /** Applies square padding for icon-only buttons. */
  onlyIcon?: boolean;
  /** Extra classes, merged over the variant classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  variant: "primary",
  size: "md",
  disabled: undefined,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :data-only-icon="onlyIcon ? '' : null"
    :class="button({ variant, size, class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
