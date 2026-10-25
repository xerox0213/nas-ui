<script lang="ts">
import { tv } from "../../utils/tv";

export const selectValue = tv({
  base: "grow overflow-hidden text-ellipsis whitespace-nowrap",
});
</script>

<script setup lang="ts">
import { SelectValue, type SelectValueProps } from "reka-ui";

export type Props = SelectValueProps & {
  /** Extra classes, merged over the value classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SelectValue
    v-slot="defaultProps"
    :as="as"
    :as-child="asChild"
    :placeholder="placeholder"
    :class="selectValue({ class: props.class })"
  >
    <slot v-bind="defaultProps"></slot>
  </SelectValue>
</template>
