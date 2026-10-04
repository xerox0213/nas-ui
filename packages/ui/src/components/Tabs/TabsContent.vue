<script setup lang="ts">
import { TabsContent, type TabsContentProps } from "reka-ui";

import { injectTabsContext } from "./tabs.context";

export type Props = TabsContentProps & {
  /** Extra classes, merged over the panel classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectTabsContext();
</script>

<template>
  <TabsContent
    :as="as"
    :as-child="asChild"
    :value="value"
    :force-mount="forceMount"
    :class="ui.content({ class: props.class })"
  >
    <slot></slot>
  </TabsContent>
</template>
