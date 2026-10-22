<script lang="ts">
import { tv } from "../../utils/tv";
import { dialogIntro } from "../Dialog/DialogIntro.vue";

export const alertDialogIntro = tv({
  extend: dialogIntro,
});
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the intro classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="alertDialogIntro({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
