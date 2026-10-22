<script lang="ts">
import { tv } from "../../utils/tv";
import { dialogTitle } from "../Dialog/DialogTitle.vue";

export const alertDialogTitle = tv({
  extend: dialogTitle,
});
</script>

<script setup lang="ts">
import { AlertDialogTitle, type AlertDialogTitleProps } from "reka-ui";

export type Props = AlertDialogTitleProps & {
  /** Extra classes, merged over the title classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AlertDialogTitle :as="as" :as-child="asChild" :class="alertDialogTitle({ class: props.class })">
    <slot></slot>
  </AlertDialogTitle>
</template>
