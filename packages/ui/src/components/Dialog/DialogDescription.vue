<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "reka-ui";

import { injectDialogContext } from "./dialog.context";

export type Props = DialogDescriptionProps & {
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectDialogContext();
</script>

<template>
  <DialogDescription
    :as="as"
    :as-child="asChild"
    :class="ui.description({ class: props.class })"
  >
    <slot></slot>
  </DialogDescription>
</template>
