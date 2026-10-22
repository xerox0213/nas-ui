<script lang="ts">
import { tv } from "../../utils/tv";

export const dialogTitle = tv({
  base: "text-heading-4 text-fg",
});
</script>

<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "reka-ui";

export type Props = DialogTitleProps & {
  /** Extra classes, merged over the title classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <DialogTitle :as="as" :as-child="asChild" :class="dialogTitle({ class: props.class })">
    <slot></slot>
  </DialogTitle>
</template>
