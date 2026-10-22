<script setup lang="ts">
import { AccordionHeader, type AccordionHeaderProps } from "reka-ui";

export type Props = AccordionHeaderProps & {
  /** Extra classes, merged over the header classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <AccordionHeader :as="as" :as-child="asChild" :class="props.class">
    <slot></slot>
  </AccordionHeader>
</template>
