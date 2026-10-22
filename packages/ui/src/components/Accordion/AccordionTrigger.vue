<script lang="ts">
import { tv } from "../../utils/tv";

export const accordionTrigger = tv({
  base: [
    "flex items-center gap-3 px-4 py-3 text-left text-label -outline-offset-2 transition-colors not-data-disabled:hover:bg-hover [&_svg]:size-4 [&_svg]:shrink-0",
    "group-first:rounded-t-[calc(var(--radius-surface)-1px)]",
    "not-group-data-[state=open]:group-last:rounded-b-[calc(var(--radius-surface)-1px)]",
    "data-disabled:text-fg-disabled",
  ],
});
</script>

<script setup lang="ts">
import { AccordionTrigger, type AccordionTriggerProps } from "reka-ui";

export type Props = AccordionTriggerProps & {
  /** Extra classes, merged over the trigger classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AccordionTrigger :as="as" :as-child="asChild" :class="accordionTrigger({ class: props.class })">
    <slot></slot>
  </AccordionTrigger>
</template>
