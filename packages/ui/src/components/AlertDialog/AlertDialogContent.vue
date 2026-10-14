<script setup lang="ts">
import {
  AlertDialogContent,
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
} from "reka-ui";

import { injectAlertDialogContext } from "./alert-dialog.context";

export type Props = AlertDialogContentProps & {
  /** Extra classes, merged over the content classes. */
  class?: string;
};

export type Emits = AlertDialogContentEmits;

const props = withDefaults(defineProps<Props>(), {
  disableOutsidePointerEvents: undefined,
});

const emits = defineEmits<Emits>();

const { ui } = injectAlertDialogContext();
</script>

<template>
  <AlertDialogContent
    :as="as"
    :as-child="asChild"
    :disable-outside-pointer-events="disableOutsidePointerEvents"
    :force-mount="forceMount"
    :class="ui.content({ class: props.class })"
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
