<script setup lang="ts">
import { X } from "@lucide/vue";
import { DialogClose, type DialogCloseProps } from "reka-ui";

import Button from "../Button/Button.vue";
import Icon from "../Icon/Icon.vue";

defineOptions({
  inheritAttrs: false,
});

export type Props = DialogCloseProps & {
  /** Extra classes, merged over the default button classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <DialogClose
    v-if="$slots.default || as !== undefined || asChild === true"
    :as="as"
    :as-child="asChild"
    :class="props.class"
    v-bind="$attrs"
  >
    <slot></slot>
  </DialogClose>

  <DialogClose v-else as-child>
    <Button
      variant="ghost"
      size="sm"
      only-icon
      :class="props.class"
      v-bind="$attrs"
    >
      <Icon :as="X" />
      <span class="sr-only">Close</span>
    </Button>
  </DialogClose>
</template>
