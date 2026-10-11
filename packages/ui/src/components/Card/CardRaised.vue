<script setup lang="ts">
import { Slot } from "reka-ui";

import { injectCardContext } from "./card.context";

export type Props = {
  /** Extra classes, merged over the raised classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectCardContext();
</script>

<template>
  <Slot :class="ui.raised({ class: props.class })">
    <slot></slot>
  </Slot>
</template>
