<script lang="ts">
import { tv } from "../../utils/tv";

export const selectItem = tv({
  base: [
    "flex items-center gap-2 rounded-base px-2 py-1.5 text-sm leading-5 transition-colors select-none [&_svg]:size-4",
    "data-highlighted:bg-hover data-highlighted:focus-visible:outline-none",
    "data-disabled:opacity-50",
  ],
});
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import {
  type AcceptableValue,
  SelectItem,
  type SelectItemEmits,
  type SelectItemProps,
} from "reka-ui";

import SelectItemIndicator from "./SelectItemIndicator.vue";
import SelectItemText from "./SelectItemText.vue";

export type Props<T = AcceptableValue> = SelectItemProps<T> & {
  /** Extra classes, merged over the item classes. */
  class?: string;
};

export type Emits<T = AcceptableValue> = SelectItemEmits<T>;

const props = defineProps<Props<T>>();

const emits = defineEmits<Emits<T>>();
</script>

<template>
  <SelectItem
    :as="as"
    :as-child="asChild"
    :value="value"
    :disabled="disabled"
    :text-value="textValue"
    :class="selectItem({ class: props.class })"
    @select="emits('select', $event as Emits<T>['select'][0])"
  >
    <SelectItemText>
      <slot></slot>
    </SelectItemText>
    <SelectItemIndicator>
      <slot name="indicator"></slot>
    </SelectItemIndicator>
  </SelectItem>
</template>
