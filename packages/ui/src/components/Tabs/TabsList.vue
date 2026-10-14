<script setup lang="ts">
import { TabsList, type TabsListProps } from "reka-ui";

import { injectTabsContext } from "./tabs.context";

export type Props = TabsListProps & {
  /** Extra classes, merged over the list classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectTabsContext();
</script>

<template>
  <TabsList
    :as="as"
    :as-child="asChild"
    :loop="loop"
    :class="ui.list({ class: props.class })"
  >
    <slot></slot>
  </TabsList>
</template>
