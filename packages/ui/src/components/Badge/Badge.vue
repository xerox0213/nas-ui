<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const badge = tv({
  base: "inline-flex items-center rounded-base border [&_svg]:shrink-0",
  variants: {
    variant: {
      success: "border-line-success-subtle bg-success-subtle text-on-success-subtle",
      warning: "border-line-warning-subtle bg-warning-subtle text-on-warning-subtle",
      danger: "border-line-danger-subtle bg-danger-subtle text-on-danger-subtle",
      neutral: "border-line-neutral-subtle bg-neutral-subtle text-on-neutral-subtle",
    },
    size: {
      sm: "gap-1.5 px-1.5 py-0.5 text-xs [&_svg]:size-3.5",
      md: "gap-1.5 px-2 py-1 text-xs [&_svg]:size-3.5",
      lg: "gap-2 px-2.5 py-1 text-label [&_svg]:size-4",
    },
  },
});

type Variants = VariantProps<typeof badge>;
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Status conveyed by the badge's color. */
  variant?: Variants["variant"];
  /** Badge size. */
  size?: Variants["size"];
  /** Extra classes, merged over the variant classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  variant: "neutral",
  size: "md",
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="badge({ variant, size, class: props.class })">
    <slot></slot>
  </Primitive>
</template>
