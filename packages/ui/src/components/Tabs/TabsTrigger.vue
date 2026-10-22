<script lang="ts">
import { tv } from "../../utils/tv";

export const tabsTrigger = tv({
  base: [
    "group relative z-2 inline-flex items-center gap-2 px-4 py-1.5 text-label text-fg-subtle transition-colors [counter-increment:tabs] hover:text-fg [&_svg]:size-4 [&_svg]:shrink-0",
    "data-[state=active]:text-fg",
    "data-disabled:bg-transparent data-disabled:text-fg-disabled",
  ],
  variants: {
    orientation: {
      horizontal: "rounded-t-surface",
      vertical: "min-w-40 rounded-l-surface",
    },
  },
});
</script>

<script setup lang="ts">
import { injectTabsRootContext, TabsTrigger, type TabsTriggerProps } from "reka-ui";

export type Props = TabsTriggerProps & {
  /** Extra classes, merged over the trigger classes. */
  class?: string;
};

const props = defineProps<Props>();

const { orientation } = injectTabsRootContext();
</script>

<template>
  <TabsTrigger
    :as="as"
    :as-child="asChild"
    :value="value"
    :disabled="disabled"
    :class="tabsTrigger({ orientation, class: props.class })"
  >
    <slot></slot>
  </TabsTrigger>
</template>
