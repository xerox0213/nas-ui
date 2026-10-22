<script lang="ts">
import { tv } from "../../utils/tv";

export const tabsList = tv({
  base: "relative isolate flex border-line [counter-reset:tabs]",
  variants: {
    orientation: {
      horizontal: "flex-row border-b",
      vertical: "flex-col border-r",
    },
  },
});
</script>

<script setup lang="ts">
import { injectTabsRootContext, TabsList, type TabsListProps } from "reka-ui";

export type Props = TabsListProps & {
  /** Extra classes, merged over the list classes. */
  class?: string;
};

const props = defineProps<Props>();

const { orientation } = injectTabsRootContext();
</script>

<template>
  <TabsList
    :as="as"
    :as-child="asChild"
    :loop="loop"
    :class="tabsList({ orientation, class: props.class })"
  >
    <slot></slot>
  </TabsList>
</template>
