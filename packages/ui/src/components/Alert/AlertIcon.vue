<script setup lang="ts">
import { CircleCheck, CircleX, Info, TriangleAlert } from "@lucide/vue";
import { computed } from "vue";

import type { IconProps } from "../Icon";
import Icon from "../Icon/Icon.vue";
import { injectAlertContext } from "./alert.context.ts";

export type Props = {
  /** Icon component to render instead of the variant icon. */
  as?: IconProps["as"];
  /** Render the child element instead, such as a custom `<svg>`, and size it. */
  asChild?: boolean;
  /** Extra classes, merged over the icon classes. */
  class?: string;
};

const props = defineProps<Props>();

const { variant } = injectAlertContext();

const icon = computed(() => {
  const value = variant.value;

  switch (value) {
    case "neutral": {
      return Info;
    }
    case "success": {
      return CircleCheck;
    }
    case "warning": {
      return TriangleAlert;
    }
    case "danger": {
      return CircleX;
    }
    default: {
      const _exhaustiveCheck: never = value;
      return _exhaustiveCheck;
    }
  }
});

const { ui } = injectAlertContext();
</script>

<template>
  <Icon
    :as="as ?? icon"
    :as-child="asChild"
    size="md"
    :class="ui.icon({ class: props.class })"
  >
    <slot></slot>
  </Icon>
</template>
