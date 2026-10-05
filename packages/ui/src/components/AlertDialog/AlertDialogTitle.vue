<script setup lang="ts">
import { AlertDialogTitle, type AlertDialogTitleProps } from "reka-ui";

import { injectAlertDialogContext } from "./alert-dialog.context";

export type Props = AlertDialogTitleProps & {
  /** Extra classes, merged over the title classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAlertDialogContext();
</script>

<template>
  <AlertDialogTitle
    :as="as"
    :as-child="asChild"
    :class="ui.title({ class: props.class })"
  >
    <slot></slot>
  </AlertDialogTitle>
</template>
