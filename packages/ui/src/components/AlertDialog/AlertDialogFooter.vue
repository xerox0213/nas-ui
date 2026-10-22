<script lang="ts">
import { tv } from "../../utils/tv";
import { dialogFooter } from "../Dialog/DialogFooter.vue";

export const alertDialogFooter = tv({
  extend: dialogFooter,
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the footer classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="alertDialogFooter({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
