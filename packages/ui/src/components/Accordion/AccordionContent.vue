<script lang="ts">
import { tv } from "../../utils/tv";

export const accordionContent = tv({
  base: [
    "overflow-hidden px-4 pb-4 text-fg-muted",
    "motion-safe:data-[state=closed]:animate-accordion-up motion-safe:data-[state=open]:animate-accordion-down",
  ],
});
</script>

<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "reka-ui";

export type Props = AccordionContentProps & {
  /** Extra classes, merged over the content classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AccordionContent
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="accordionContent({ class: props.class })"
  >
    <slot></slot>
  </AccordionContent>
</template>
