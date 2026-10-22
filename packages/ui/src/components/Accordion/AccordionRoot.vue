<script lang="ts">
import { tv } from "../../utils/tv";

export const accordionRoot = tv({
  base: "overflow-hidden rounded-surface border border-line bg-surface",
});
</script>

<script setup lang="ts" generic="M extends boolean = false">
import { AccordionRoot, type AccordionRootProps } from "reka-ui";
import { computed } from "vue";

import type { SingleOrMultiple } from "../../utils/types";

export type Props<M extends boolean = false> = Omit<
  AccordionRootProps,
  "type" | "modelValue" | "defaultValue" | "orientation" | "dir"
> & {
  /** The open item(s) when initially rendered, when uncontrolled. */
  defaultValue?: SingleOrMultiple<M, string>;
  /** Allow several items to be open at the same time. */
  multiple?: M;
  /** Extra classes, merged over the root classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props<M>>(), {
  unmountOnHide: true,
});

const modelValue = defineModel<SingleOrMultiple<M, string>>();

// Vue cannot resolve the generic `M` to a runtime `Boolean` declaration, so
// the bare `multiple` attribute reaches us as `""` instead of `true`.
const type = computed(() =>
  props.multiple || (props.multiple as unknown) === "" ? "multiple" : "single",
);
</script>

<template>
  <AccordionRoot
    v-model="modelValue"
    :as="as"
    :as-child="asChild"
    :type="type"
    :collapsible="collapsible"
    :default-value="defaultValue"
    :disabled="disabled"
    orientation="vertical"
    :unmount-on-hide="unmountOnHide"
    :class="accordionRoot({ class: props.class })"
  >
    <template #default="slotArgs">
      <slot v-bind="slotArgs"></slot>
    </template>
  </AccordionRoot>
</template>
