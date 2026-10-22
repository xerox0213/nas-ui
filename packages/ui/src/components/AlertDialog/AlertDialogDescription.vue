<script lang="ts">
import { tv } from "../../utils/tv";
import { dialogDescription } from "../Dialog/DialogDescription.vue";

export const alertDialogDescription = tv({
  extend: dialogDescription,
});
</script>

<script setup lang="ts">
import { AlertDialogDescription, type AlertDialogDescriptionProps } from "reka-ui";

export type Props = AlertDialogDescriptionProps & {
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AlertDialogDescription
    :as="as"
    :as-child="asChild"
    :class="alertDialogDescription({ class: props.class })"
  >
    <slot></slot>
  </AlertDialogDescription>
</template>
