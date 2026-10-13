<script setup lang="ts">
import { CircleCheck, CircleX, Info, TriangleAlert } from "@lucide/vue";
import { Slot } from "reka-ui";
import { computed } from "vue";

import { injectAlertContext } from "./alert.context.ts";

export type Props = {
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
  <Slot :class="ui.icon({ class: props.class })">
    <slot>
      <component :is="icon" />
    </slot>
  </Slot>
</template>
