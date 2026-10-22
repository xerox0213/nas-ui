<script lang="ts">
import { tv } from "../../utils/tv";

export const tabsIndicator = tv({
  base: "absolute z-1 border-line bg-surface",
  variants: {
    orientation: {
      horizontal: [
        "rounded-t-surface border-x border-t-2 border-t-primary",
        "h-[calc(var(--reka-tabs-indicator-thickness)+1px)] w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
      ],
      vertical: [
        "rounded-l-surface border-y border-l-2 border-l-primary",
        "h-(--reka-tabs-indicator-size) w-[calc(var(--reka-tabs-indicator-thickness)+1px)] translate-y-(--reka-tabs-indicator-position)",
      ],
    },
    animated: {
      true: "motion-safe:transition-[translate,width]",
    },
  },
});
</script>

<script setup lang="ts">
import { injectTabsRootContext, TabsIndicator, type TabsIndicatorProps } from "reka-ui";

export type Props = TabsIndicatorProps & {
  /** Slides the indicator between tabs, unless reduced motion is requested. */
  animated?: boolean;
  /** Extra classes, merged over the indicator classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  animated: true,
});

const { orientation } = injectTabsRootContext();
</script>

<template>
  <TabsIndicator
    :as="as"
    :as-child="asChild"
    :class="tabsIndicator({ orientation, animated, class: props.class })"
  >
    <slot></slot>
  </TabsIndicator>
</template>
