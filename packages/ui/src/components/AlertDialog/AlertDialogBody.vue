<script lang="ts">
import { tv } from "../../utils/tv";
import { dialogBody } from "../Dialog/DialogBody.vue";

export const alertDialogBody = tv({
  extend: dialogBody,
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the body classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="alertDialogBody({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
