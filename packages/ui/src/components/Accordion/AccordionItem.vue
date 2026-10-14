<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from "reka-ui";

import { injectAccordionContext } from "./accordion.context";

export type Props = AccordionItemProps & {
  /** Extra classes, merged over the item classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  unmountOnHide: undefined,
});

const { ui } = injectAccordionContext();
</script>

<template>
  <AccordionItem
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
    :value="value"
    :class="ui.item({ class: props.class })"
  >
    <template #default="slotArgs">
      <slot v-bind="slotArgs"></slot>
    </template>
  </AccordionItem>
</template>
