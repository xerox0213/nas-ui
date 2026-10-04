<script setup lang="ts">
import { injectTabsContext } from "./tabs.context";

export type Props = {
  /** Extra classes, merged over the number classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectTabsContext();
</script>

<template>
  <span :class="ui.triggerNumber({ class: props.class })"></span>
</template>
