<script setup lang="ts">
import { ChevronDown } from "@lucide/vue";
import { Slot } from "reka-ui";

import { injectAccordionContext } from "./accordion.context";

export type Props = {
  /** Extra classes, merged over the chevron classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAccordionContext();
</script>

<template>
  <Slot :class="ui.chevron({ class: props.class })">
    <slot>
      <ChevronDown />
    </slot>
  </Slot>
</template>
