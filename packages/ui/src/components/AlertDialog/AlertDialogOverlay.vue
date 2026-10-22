<script lang="ts">
import { tv } from "../../utils/tv";
import { dialogOverlay } from "../Dialog/DialogOverlay.vue";

export const alertDialogOverlay = tv({
  extend: dialogOverlay,
});
</script>

<script setup lang="ts">
import { AlertDialogOverlay, type AlertDialogOverlayProps } from "reka-ui";

export type Props = AlertDialogOverlayProps & {
  /** Extra classes, merged over the overlay classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AlertDialogOverlay
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="alertDialogOverlay({ class: props.class })"
  >
    <slot></slot>
  </AlertDialogOverlay>
</template>
