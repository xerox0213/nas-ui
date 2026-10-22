<script setup lang="ts">
import { type AlertDialogProps, AlertDialogRoot } from "reka-ui";

export type Props = Omit<AlertDialogProps, "open">;

withDefaults(defineProps<Props>(), {
  unmountOnHide: true,
});

const open = defineModel<boolean>("open");
</script>

<template>
  <AlertDialogRoot v-model:open="open" :default-open="defaultOpen" :unmount-on-hide="unmountOnHide">
    <template #default="slotArgs">
      <slot v-bind="slotArgs"></slot>
    </template>
  </AlertDialogRoot>
</template>
