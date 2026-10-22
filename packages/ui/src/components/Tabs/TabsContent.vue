<script lang="ts">
import { tv } from "../../utils/tv";

export const tabsContent = tv({
  base: "border-line bg-surface p-4",
  variants: {
    orientation: {
      horizontal: "rounded-b-surface border-x border-b",
      vertical: "grow rounded-r-surface border-y border-r",
    },
  },
});
</script>

<script setup lang="ts">
import { injectTabsRootContext, TabsContent, type TabsContentProps } from "reka-ui";

export type Props = TabsContentProps & {
  /** Extra classes, merged over the panel classes. */
  class?: string;
};

const props = defineProps<Props>();

const { orientation } = injectTabsRootContext();
</script>

<template>
  <TabsContent
    :as="as"
    :as-child="asChild"
    :value="value"
    :force-mount="forceMount"
    :class="tabsContent({ orientation, class: props.class })"
  >
    <slot></slot>
  </TabsContent>
</template>
