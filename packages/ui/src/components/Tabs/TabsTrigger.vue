<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps } from "reka-ui";

import { injectTabsContext } from "./tabs.context";

export type Props = TabsTriggerProps & {
  /** Extra classes, merged over the trigger classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectTabsContext();
</script>

<template>
  <TabsTrigger
    :as="as"
    :as-child="asChild"
    :value="value"
    :disabled="disabled"
    :class="ui.trigger({ class: props.class })"
  >
    <slot></slot>
  </TabsTrigger>
</template>
