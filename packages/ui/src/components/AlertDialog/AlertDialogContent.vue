<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";
import { dialogContent } from "../Dialog/DialogContent.vue";

export const alertDialogContent = tv({
  extend: dialogContent,
});

type Variants = VariantProps<typeof alertDialogContent>;
</script>

<script setup lang="ts">
import {
  AlertDialogContent,
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
} from "reka-ui";

export type Props = AlertDialogContentProps & {
  /** Dialog width: `sm` suits confirmations, `md` forms, `lg` rich content. */
  size?: Variants["size"];
  /** Extra classes, merged over the content classes. */
  class?: string;
};

export type Emits = AlertDialogContentEmits;

const props = withDefaults(defineProps<Props>(), {
  disableOutsidePointerEvents: undefined,
  size: "sm",
});

const emits = defineEmits<Emits>();
</script>

<template>
  <AlertDialogContent
    :as="as"
    :as-child="asChild"
    :disable-outside-pointer-events="disableOutsidePointerEvents"
    :force-mount="forceMount"
    :class="alertDialogContent({ size, class: props.class })"
    @escape-key-down="emits('escapeKeyDown', $event)"
    @pointer-down-outside="emits('pointerDownOutside', $event)"
    @focus-outside="emits('focusOutside', $event)"
    @interact-outside="emits('interactOutside', $event)"
    @open-auto-focus="emits('openAutoFocus', $event)"
    @close-auto-focus="emits('closeAutoFocus', $event)"
  >
    <slot></slot>
  </AlertDialogContent>
</template>
