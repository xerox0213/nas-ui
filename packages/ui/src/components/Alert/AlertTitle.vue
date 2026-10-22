<script lang="ts">
import { tv } from "../../utils/tv";

export const alertTitle = tv({
  base: "col-start-2 col-end-3 row-start-1 row-end-2 self-center text-label",
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

import { injectAlertContext } from "./AlertRoot.vue";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the title classes. */
  class?: string;
};

const props = defineProps<Props>();

const { titleId } = injectAlertContext();
</script>

<template>
  <Primitive :id="titleId" :as="as" :as-child="asChild" :class="alertTitle({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
