<script lang="ts">
import { tv } from "../../utils/tv";

export const alertIcon = tv({
  base: "col-start-1 col-end-2 row-start-1 row-end-2 mr-3 size-4 shrink-0 self-center",
});
</script>

<script setup lang="ts">
import { CircleCheck, CircleX, Info, TriangleAlert } from "@lucide/vue";
import { Slot } from "reka-ui";
import { computed } from "vue";

import { injectAlertContext } from "./AlertRoot.vue";

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
</script>

<template>
  <Slot :class="alertIcon({ class: props.class })">
    <slot>
      <component :is="icon" />
    </slot>
  </Slot>
</template>
