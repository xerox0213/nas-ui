<script lang="ts">
const badge = tv({
  base: "rounded-base inline-flex items-center border",
  variants: {
    variant: {
      success:
        "bg-success-subtle border-line-success-subtle text-on-success-subtle",
      warning:
        "bg-warning-subtle border-line-warning-subtle text-on-warning-subtle",
      danger:
        "bg-danger-subtle border-line-danger-subtle text-on-danger-subtle",
      neutral:
        "bg-neutral-subtle border-line-neutral-subtle text-on-neutral-subtle",
    },
    size: {
      sm: "gap-1.5 px-1.5 py-0.5 text-xs",
      md: "gap-1.5 px-2 py-1 text-xs",
      lg: "text-label gap-2 px-2.5 py-1",
    },
  },
});

type Variants = VariantProps<typeof badge>;

export type Props = {
  /** Element or component to render as. */
  as?: Component | AsTag;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Status conveyed by the badge's color. */
  variant?: Variants["variant"];
  /** Badge size. */
  size?: Variants["size"];
  /** Extra classes, merged over the variant classes. */
  class?: string;
};

/**
 * Badges label an item with a short status or category, such as "Active"
 * or "Failed". They are not interactive; for actions, use a button.
 * The label must state the status: don't rely on color alone.
 *
 * @summary labels an item with a short status or category
 */
export default { name: "Badge" };
</script>

<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import type { Component } from "vue";

import { tv, type VariantProps } from "../../utils/tv";

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  variant: "neutral",
  size: "md",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="badge({ variant, size, class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
