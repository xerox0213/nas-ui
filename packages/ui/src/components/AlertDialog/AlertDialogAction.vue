<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from "reka-ui";

export type Props = AlertDialogActionProps & {
  /** Extra classes, merged over the action button classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AlertDialogAction :as="as" :as-child="asChild" :class="props.class">
    <slot></slot>
  </AlertDialogAction>
</template>
