<script setup lang="ts">
import { ChevronDown } from "@lucide/vue";

import Icon, { type Props as IconProps } from "../Icon/Icon.vue";
import { injectAccordionContext } from "./accordion.context";

export type Props = {
  /** Icon component to render instead of the default chevron. */
  as?: IconProps["as"];
  /** Render the child element instead, such as a custom `<svg>`, and size it. */
  asChild?: boolean;
  /** Extra classes, merged over the chevron classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAccordionContext();
</script>

<template>
  <Icon
    :as="as ?? ChevronDown"
    :as-child="asChild"
    size="md"
    :class="ui.chevron({ class: props.class })"
  >
    <slot></slot>
  </Icon>
</template>
