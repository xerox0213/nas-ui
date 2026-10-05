<script setup lang="ts">
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
} from "reka-ui";

import { injectDialogContext } from "./dialog.context";

export type Props = DialogContentProps & {
  /** Extra classes, merged over the content classes. */
  class?: string;
};

export type Emits = DialogContentEmits;

const props = withDefaults(defineProps<Props>(), {
  disableOutsidePointerEvents: undefined,
});

const emits = defineEmits<Emits>();

const { ui } = injectDialogContext();
</script>

<template>
  <DialogContent
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
  </DialogContent>
</template>
