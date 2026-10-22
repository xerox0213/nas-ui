<script lang="ts">
import { tv } from "../../utils/tv";

export const dialogDescription = tv({
  base: "text-fg-muted",
});
</script>

<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "reka-ui";

export type Props = DialogDescriptionProps & {
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <DialogDescription
    :as="as"
    :as-child="asChild"
    :class="dialogDescription({ class: props.class })"
  >
    <slot></slot>
  </DialogDescription>
</template>
