<script lang="ts">
import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import { tv, type VariantProps } from "../../utils/tv";

export const alertRoot = tv({
  base: "grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_auto] rounded-surface border px-4 py-3",
  variants: {
    variant: {
      neutral: "border-line-neutral-subtle bg-neutral-subtle text-on-neutral-subtle",
      success: "border-line-success-subtle bg-success-subtle text-on-success-subtle",
      warning: "border-line-warning-subtle bg-warning-subtle text-on-warning-subtle",
      danger: "border-line-danger-subtle bg-danger-subtle text-on-danger-subtle",
    },
  },
});

type Variants = VariantProps<typeof alertRoot>;

export const [provideAlertContext, injectAlertContext] = createContext<{
  close: () => void;
  variant: ComputedRef<Exclude<Variants["variant"], undefined>>;
  /** Links `AlertTitle` to the close button accessible name. */
  titleId: string;
}>("AlertContext", "AlertRoot");
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { computed, useId } from "vue";

export type Props = PrimitiveProps & {
  /** Semantic tone. Also picks the default `AlertIcon`. */
  variant?: Variants["variant"];
  /** Extra classes, merged over the base classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "neutral",
});

/** Alert visibility: leave unbound and `AlertClose` dismisses it on its own. */
const open = defineModel<boolean>("open", { default: true });

const variant = computed(() => props.variant);

const close = () => {
  open.value = false;
};

const titleId = useId();

provideAlertContext({ variant, close, titleId });
</script>

<template>
  <Primitive
    v-if="open"
    :as="as"
    :as-child="asChild"
    role="alert"
    :class="alertRoot({ variant, class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
