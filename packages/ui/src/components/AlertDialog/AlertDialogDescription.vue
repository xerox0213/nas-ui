<script setup lang="ts">
import {
  AlertDialogDescription,
  type AlertDialogDescriptionProps,
} from "reka-ui";

import { injectAlertDialogContext } from "./alert-dialog.context";

export type Props = AlertDialogDescriptionProps & {
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAlertDialogContext();
</script>

<template>
  <AlertDialogDescription
    :as="as"
    :as-child="asChild"
    :class="ui.description({ class: props.class })"
  >
    <slot></slot>
  </AlertDialogDescription>
</template>
