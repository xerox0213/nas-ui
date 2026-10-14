<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "reka-ui";

import { injectAccordionContext } from "./accordion.context";

export type Props = AccordionContentProps & {
  /** Extra classes, merged over the content classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAccordionContext();
</script>

<template>
  <AccordionContent
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="ui.content({ class: props.class })"
  >
    <slot></slot>
  </AccordionContent>
</template>
