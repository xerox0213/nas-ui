<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const button = tv({
  base: "inline-flex items-center justify-center rounded-base border transition-colors disabled:opacity-50 [&_svg]:shrink-0",
  variants: {
    variant: {
      primary: [
        "border-primary bg-primary text-on-primary",
        "hover:not-disabled:border-primary-hover hover:not-disabled:bg-primary-hover",
      ],
      secondary: [
        "border-line-control bg-control text-fg",
        "hover:not-disabled:border-line-control-hover hover:not-disabled:bg-hover",
      ],
      ghost: [
        "border-transparent text-fg-muted",
        "hover:not-disabled:bg-hover hover:not-disabled:text-fg",
      ],
      danger: [
        "border-danger bg-danger text-on-danger",
        "hover:not-disabled:border-danger-hover hover:not-disabled:bg-danger-hover",
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
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
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
