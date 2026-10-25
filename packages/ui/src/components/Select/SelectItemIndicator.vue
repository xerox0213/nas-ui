<script lang="ts">
import { tv } from "../../utils/tv";

export const selectItemIndicator = tv({
  base: "size-4",
});
</script>

<script setup lang="ts">
import { Check } from "@lucide/vue";
import { SelectItemIndicator, type SelectItemIndicatorProps } from "reka-ui";

export type Props = SelectItemIndicatorProps & {
  /** Extra classes, merged over the indicator classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SelectItemIndicator
    :as="as"
    :as-child="asChild"
    :force-mount="forceMount"
    :class="selectItemIndicator({ class: props.class })"
  >
    <slot>
      <Check />
    </slot>
  </SelectItemIndicator>
</template>
