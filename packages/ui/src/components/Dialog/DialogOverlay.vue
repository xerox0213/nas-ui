<script setup lang="ts">
import { DialogOverlay, type DialogOverlayProps } from "reka-ui";

import { injectDialogContext } from "./dialog.context";

export type Props = DialogOverlayProps & {
  /** Extra classes, merged over the overlay classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectDialogContext();
</script>

<template>
  <DialogOverlay
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="ui.overlay({ class: props.class })"
  >
    <slot></slot>
  </DialogOverlay>
</template>
