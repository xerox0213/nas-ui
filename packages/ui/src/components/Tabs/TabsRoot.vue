<script setup lang="ts">
import { type StringOrNumber, TabsRoot, type TabsRootProps } from "reka-ui";
import { computed } from "vue";

import { provideTabsContext } from "./tabs.context";
import { tabs } from "./tabs.theme";

export type Props = Omit<TabsRootProps, "modelValue"> & {
  /** Extra classes, merged over the root classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  orientation: "horizontal",
  unmountOnHide: true,
});

/** Value of the active tab. */
const modelValue = defineModel<StringOrNumber>();

const ui = computed(() => tabs({ orientation: props.orientation }));

provideTabsContext({ ui });
</script>

<template>
  <TabsRoot
    v-model="modelValue"
    :as="as"
    :as-child="asChild"
    :orientation="orientation"
    :activation-mode="activationMode"
    :unmount-on-hide="unmountOnHide"
    :default-value="defaultValue"
    :dir="dir"
    :class="ui.base({ class: props.class })"
  >
    <slot></slot>
  </TabsRoot>
</template>
