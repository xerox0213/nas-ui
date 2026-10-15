<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "reka-ui";

import { injectDialogContext } from "./dialog.context";

export type Props = DialogTitleProps & {
  /** Extra classes, merged over the title classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectDialogContext();
</script>

<template>
  <DialogTitle :as="as" :as-child="asChild" :class="ui.title({ class: props.class })">
    <slot></slot>
  </DialogTitle>
</template>
