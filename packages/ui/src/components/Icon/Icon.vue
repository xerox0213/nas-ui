<script lang="ts">
const icon = tv({
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-4",
      lg: "size-5",
    },
  },
});

type Variants = VariantProps<typeof icon>;

export type Props = {
  /** Icon component to render, such as a Lucide icon. */
  as?: Component;
  /** Render the child element instead, such as a custom `<svg>`, and size it. */
  asChild?: boolean;
  /** Icon size: `sm` 14px, `md` 16px, `lg` 20px. */
  size?: Variants["size"];
  /** Extra classes, merged over the size classes. */
  class?: string;
};

/**
 * Icons render an icon component at one of the design system sizes.
 * Pass the component to `as`, or use `asChild` to size a custom `<svg>`.
 * Add an `aria-label` when the icon carries meaning on its own.
 *
 * @summary renders an icon at a design system size
 */
export default { name: "Icon" };
</script>

<script setup lang="ts">
import { Primitive } from "reka-ui";
import type { Component } from "vue";

import { tv, type VariantProps } from "../../utils/tv";

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="icon({ size, class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
