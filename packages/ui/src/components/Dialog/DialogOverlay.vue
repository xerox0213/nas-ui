<script lang="ts">
import { tv } from "../../utils/tv";

export const dialogOverlay = tv({
  base: [
    "fixed inset-x-0 inset-y-0 bg-overlay",
    "motion-safe:data-[state=closed]:animate-fade-out motion-safe:data-[state=open]:animate-fade-in",
  ],
});
</script>

<script setup lang="ts">
import { DialogOverlay, type DialogOverlayProps } from "reka-ui";

export type Props = DialogOverlayProps & {
  /** Extra classes, merged over the overlay classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <DialogOverlay
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="dialogOverlay({ class: props.class })"
  >
    <slot></slot>
  </DialogOverlay>
</template>
