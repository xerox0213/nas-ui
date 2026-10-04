<script setup lang="ts">
import { TabsIndicator, type TabsIndicatorProps } from "reka-ui";

import { injectTabsContext } from "./tabs.context";

export type Props = TabsIndicatorProps & {
  /** Slides the indicator between tabs, unless reduced motion is requested. */
  animated?: boolean;
  /** Extra classes, merged over the indicator classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  animated: true,
});

const { ui } = injectTabsContext();
</script>

<template>
  <TabsIndicator
    :as="as"
    :as-child="asChild"
    :class="ui.indicator({ animated, class: props.class })"
  >
    <slot></slot>
  </TabsIndicator>
</template>
