<script lang="ts">
import { tv } from "../../utils/tv";

export const cardRaised = tv({
  base: "relative z-1",
});
</script>

<script setup lang="ts">
import { Slot } from "reka-ui";

export type Props = {
  /** Extra classes, merged over the raised classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Slot :class="cardRaised({ class: props.class })">
    <slot></slot>
  </Slot>
</template>
