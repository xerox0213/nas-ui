<script lang="ts">
import { tv } from "../../utils/tv";

export const accordionItem = tv({
  base: "group border-line not-last:border-b",
});
</script>

<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from "reka-ui";

export type Props = AccordionItemProps & {
  /** Extra classes, merged over the item classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  unmountOnHide: undefined,
});
</script>

<template>
  <AccordionItem
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
    :value="value"
    :class="accordionItem({ class: props.class })"
  >
    <template #default="slotArgs">
      <slot v-bind="slotArgs"></slot>
    </template>
  </AccordionItem>
</template>
