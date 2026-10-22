<script lang="ts">
import { tv } from "../../utils/tv";

export const tabsRoot = tv({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row",
    },
  },
});
</script>

<script setup lang="ts">
import { type StringOrNumber, TabsRoot, type TabsRootProps } from "reka-ui";

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
    :class="tabsRoot({ orientation, class: props.class })"
  >
    <slot></slot>
  </TabsRoot>
</template>
