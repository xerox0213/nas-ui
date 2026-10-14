<script setup lang="ts">
import { DialogPortal, type DialogPortalProps } from "reka-ui";

export type Props = DialogPortalProps;

defineProps<Props>();
</script>

<template>
  <DialogPortal
    :defer="defer"
    :disabled="disabled"
    :force-mount="forceMount"
    :to="to"
  >
    <slot></slot>
  </DialogPortal>
</template>
