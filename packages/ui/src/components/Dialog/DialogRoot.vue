<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from "reka-ui";

export type Props = Omit<DialogRootProps, "open">;

withDefaults(defineProps<Props>(), {
  modal: true,
  unmountOnHide: true,
});

const open = defineModel<boolean>("open");
</script>

<template>
  <DialogRoot
    v-model:open="open"
    :default-open="defaultOpen"
    :modal="modal"
    :unmount-on-hide="unmountOnHide"
  >
    <template #default="slotArgs">
      <slot v-bind="slotArgs"></slot>
    </template>
  </DialogRoot>
</template>
