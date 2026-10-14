<script setup lang="ts">
import { AlertDialogPortal, type AlertDialogPortalProps } from "reka-ui";

export type Props = AlertDialogPortalProps;

defineProps<Props>();
</script>

<template>
  <AlertDialogPortal :defer="defer" :disabled="disabled" :to="to">
    <slot></slot>
  </AlertDialogPortal>
</template>
