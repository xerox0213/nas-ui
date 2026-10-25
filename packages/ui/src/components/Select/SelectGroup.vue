<script lang="ts">
import { tv } from "../../utils/tv";

export const selectGroup = tv({
  base: "flex flex-col gap-0.5 border-line not-first:pt-1 not-last:border-b not-last:pb-1",
});
</script>

<script setup lang="ts">
import { SelectGroup, type SelectGroupProps } from "reka-ui";

export type Props = SelectGroupProps & {
  /** Extra classes, merged over the group classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SelectGroup :as="as" :as-child="asChild" :class="selectGroup({ class: props.class })">
    <slot />
  </SelectGroup>
</template>
