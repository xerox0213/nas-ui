<script setup lang="ts">
import { type AlertDialogProps, AlertDialogRoot } from "reka-ui";
import { computed } from "vue";

import { provideAlertDialogContext } from "./alert-dialog.context";
import { alertDialog, type AlertDialogVariants } from "./alert-dialog.theme";

export type Props = Omit<AlertDialogProps, "open"> & {
  /** Dialog width: `sm` suits confirmations, `md` forms, `lg` rich content. */
  size?: AlertDialogVariants["size"];
};

const props = withDefaults(defineProps<Props>(), {
  unmountOnHide: true,
  size: "sm",
});

const open = defineModel<boolean>("open");

const ui = computed(() => alertDialog({ size: props.size }));

provideAlertDialogContext({ ui });
</script>

<template>
  <AlertDialogRoot
    v-model:open="open"
    :default-open="defaultOpen"
    :unmount-on-hide="unmountOnHide"
  >
    <template #default="slotArgs">
      <slot v-bind="slotArgs"></slot>
    </template>
  </AlertDialogRoot>
</template>
