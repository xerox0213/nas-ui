<script lang="ts">
const button = tv({
  base: "inline-flex items-center justify-center rounded-base border transition-colors [&_svg]:shrink-0",
  variants: {
    variant: {
      primary: [
        "border-primary bg-primary text-on-primary hover:border-primary-hover hover:bg-primary-hover",
        "disabled:border-line-disabled disabled:bg-disabled disabled:text-fg-disabled",
      ],
      secondary: [
        "border-line-control bg-control text-fg hover:border-line-control-hover hover:bg-hover",
        "disabled:border-line-disabled disabled:bg-disabled disabled:text-fg-disabled",
      ],
      ghost: [
        "border-transparent text-fg-muted hover:bg-hover hover:text-fg",
        "disabled:bg-transparent disabled:text-fg-disabled",
      ],
      danger: [
        "border-danger bg-danger text-on-danger hover:border-danger-hover hover:bg-danger-hover",
        "disabled:border-line-disabled disabled:bg-disabled disabled:text-fg-disabled",
      ],
    },
    size: {
      sm: "gap-1.5 px-2.5 py-1.25 text-xs data-only-icon:p-1.25 [&_svg]:size-3.5",
      md: "gap-2 px-3 py-1.25 text-label data-only-icon:p-1.25 [&_svg]:size-4",
      lg: "gap-2 px-4 py-1.75 text-label data-only-icon:p-1.75 [&_svg]:size-4",
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
