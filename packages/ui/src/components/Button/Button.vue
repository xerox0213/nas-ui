<script lang="ts">
const button = tv({
  base: "rounded-base inline-flex items-center justify-center border transition-colors",
  variants: {
    variant: {
      primary: [
        "bg-primary border-primary hover:border-primary-hover hover:bg-primary-hover text-on-primary",
        "disabled:bg-disabled disabled:border-line-disabled disabled:text-fg-disabled",
      ],
      secondary: [
        "bg-control hover:bg-hover border-line-control hover:border-line-control-hover",
        "disabled:bg-disabled disabled:border-line-disabled disabled:text-fg-disabled",
      ],
      ghost: [
        "text-fg-muted hover:text-fg hover:bg-hover border-transparent",
        "disabled:text-fg-disabled disabled:bg-transparent",
      ],
      danger: [
        "bg-danger border-danger hover:border-danger-hover hover:bg-danger-hover text-on-danger",
        "disabled:text-fg-disabled disabled:border-line-disabled disabled:bg-disabled",
      ],
    },
    size: {
      sm: "gap-1.5 px-2.5 py-1.25 text-xs data-only-icon:p-1.25",
      md: "text-label gap-2 px-3 py-1.25 data-only-icon:p-1.25",
      lg: "text-label gap-2 px-4 py-1.75 data-only-icon:p-1.75",
    },
  },
});

type Variants = VariantProps<typeof button>;

export type Props = {
  /** Element or component to render as. */
  as?: Component | AsTag;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Visual style. */
  variant?: Variants["variant"];
  /** Button size. */
  size?: Variants["size"];
  /** Disables the button. */
  disabled?: boolean;
  /** Applies square padding for icon-only buttons. */
  onlyIcon?: boolean;
  /** Extra classes, merged over the variant classes. */
  class?: string;
};

/**
 * Buttons trigger an action in the current view, such as submitting a form,
 * opening a dialog or deleting an item.
 * For navigation, use `asChild` with an `<a>` for external links
 * or a `<RouterLink>` for internal routes.
 *
 * @summary triggers an action in the current view
 */
export default { name: "Button" };
</script>

<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import { type Component } from "vue";

import { tv, type VariantProps } from "#/utils/tv.ts";

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
