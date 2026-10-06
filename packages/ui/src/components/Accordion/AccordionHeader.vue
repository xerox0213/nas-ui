<script setup lang="ts">
import { AccordionHeader, type AccordionHeaderProps } from "reka-ui";

import { injectAccordionContext } from "./accordion.context";

export type Props = AccordionHeaderProps & {
  /** Extra classes, merged over the header classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAccordionContext();
</script>

<template>
  <AccordionHeader
    :as="as"
    :as-child="asChild"
    :class="ui.header({ class: props.class })"
  >
    <slot></slot>
  </AccordionHeader>
</template>
