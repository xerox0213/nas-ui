<script setup lang="ts">
import { AccordionTrigger, type AccordionTriggerProps } from "reka-ui";

import { injectAccordionContext } from "./accordion.context";

export type Props = AccordionTriggerProps & {
  /** Extra classes, merged over the trigger classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAccordionContext();
</script>

<template>
  <AccordionTrigger
    :as="as"
    :as-child="asChild"
    :class="ui.trigger({ class: props.class })"
  >
    <slot></slot>
  </AccordionTrigger>
</template>
