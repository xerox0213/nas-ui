<script lang="ts">
import { tv } from "../../utils/tv";

export const accordionChevron = tv({
  base: "ml-auto text-fg-subtle transition group-hover:text-fg group-data-disabled:text-fg-disabled group-data-[state=open]:rotate-180",
});
</script>

<script setup lang="ts">
import { ChevronDown } from "@lucide/vue";
import { Slot } from "reka-ui";

export type Props = {
  /** Extra classes, merged over the chevron classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Slot :class="accordionChevron({ class: props.class })">
    <slot>
      <ChevronDown />
    </slot>
  </Slot>
</template>
