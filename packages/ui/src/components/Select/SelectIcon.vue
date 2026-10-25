<script lang="ts">
import { tv } from "../../utils/tv";

export const selectIcon = tv({
  base: "size-4 text-fg-subtle transition-transform group-data-[state=open]:rotate-180",
});
</script>

<script setup lang="ts">
import { ChevronDown } from "@lucide/vue";
import { SelectIcon, type SelectIconProps } from "reka-ui";

export type Props = SelectIconProps & {
  /** Extra classes, merged over the icon classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SelectIcon :as="as" :as-child="asChild" :class="selectIcon({ class: props.class })">
    <slot>
      <ChevronDown />
    </slot>
  </SelectIcon>
</template>
