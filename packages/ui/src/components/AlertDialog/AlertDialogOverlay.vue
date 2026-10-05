<script setup lang="ts">
import { AlertDialogOverlay, type AlertDialogOverlayProps } from "reka-ui";

import { injectAlertDialogContext } from "./alert-dialog.context";

export type Props = AlertDialogOverlayProps & {
  /** Extra classes, merged over the overlay classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAlertDialogContext();
</script>

<template>
  <AlertDialogOverlay
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="ui.overlay({ class: props.class })"
  >
    <slot></slot>
  </AlertDialogOverlay>
</template>
