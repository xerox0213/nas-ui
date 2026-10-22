<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const dialogContent = tv({
  base: [
    "fixed top-1/2 right-1/2 flex max-h-[calc(100dvh-4rem)] w-[calc(100%-2rem)] translate-x-1/2 -translate-y-1/2 flex-col rounded-surface border border-line bg-surface shadow-xl",
    "motion-safe:data-[state=closed]:animate-pop-out motion-safe:data-[state=open]:animate-pop-in",
  ],
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-2xl",
    },
  },
});

type Variants = VariantProps<typeof dialogContent>;
</script>

<script setup lang="ts">
import { DialogContent, type DialogContentEmits, type DialogContentProps } from "reka-ui";

export type Props = DialogContentProps & {
  /** Dialog width: `sm` suits confirmations, `md` forms, `lg` rich content. */
  size?: Variants["size"];
  /** Extra classes, merged over the content classes. */
  class?: string;
};

export type Emits = DialogContentEmits;

const props = withDefaults(defineProps<Props>(), {
  disableOutsidePointerEvents: undefined,
  size: "md",
});

const emits = defineEmits<Emits>();
</script>

<template>
  <DialogContent
    :as="as"
    :as-child="asChild"
    :disable-outside-pointer-events="disableOutsidePointerEvents"
    :force-mount="forceMount"
    :class="dialogContent({ size, class: props.class })"
    @escape-key-down="emits('escapeKeyDown', $event)"
    @pointer-down-outside="emits('pointerDownOutside', $event)"
    @focus-outside="emits('focusOutside', $event)"
    @interact-outside="emits('interactOutside', $event)"
    @open-auto-focus="emits('openAutoFocus', $event)"
    @close-auto-focus="emits('closeAutoFocus', $event)"
  >
    <slot></slot>
  </DialogContent>
</template>
