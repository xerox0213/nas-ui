<script setup lang="ts">
import { SwitchThumb, type SwitchThumbProps } from "reka-ui";

import { injectSwitchContext } from "./switch.context";

export type Props = SwitchThumbProps & {
  /** Extra classes, merged over the thumb classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectSwitchContext();
</script>

<template>
  <SwitchThumb :as="as" :as-child="asChild" :class="ui.thumb({ class: props.class })">
    <slot></slot>
  </SwitchThumb>
</template>
