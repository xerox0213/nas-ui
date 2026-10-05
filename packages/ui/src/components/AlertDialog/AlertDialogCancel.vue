<script setup lang="ts">
import { AlertDialogCancel, type AlertDialogCancelProps } from "reka-ui";

export type Props = AlertDialogCancelProps & {
  /** Extra classes, merged over the cancel button classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AlertDialogCancel :as="as" :as-child="asChild" :class="props.class">
    <slot></slot>
  </AlertDialogCancel>
</template>
