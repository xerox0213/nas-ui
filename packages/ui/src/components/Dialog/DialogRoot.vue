<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from "reka-ui";
import { computed } from "vue";

import { provideDialogContext } from "./dialog.context";
import { dialog, type DialogVariants } from "./dialog.theme";

export type Props = Omit<DialogRootProps, "open"> & {
  /** Dialog width: `sm` suits confirmations, `md` forms, `lg` rich content. */
  size?: DialogVariants["size"];
};

const props = withDefaults(defineProps<Props>(), {
  modal: true,
  unmountOnHide: true,
  size: "md",
});

const open = defineModel<boolean>("open");

const ui = computed(() => dialog({ size: props.size }));

provideDialogContext({ ui });
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
