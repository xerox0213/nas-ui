<script lang="ts">
import { tv } from "../../utils/tv";

export const alertClose = tv({
  base: "col-start-3 col-end-4 row-start-1 row-end-2 self-center",
});
</script>

<script setup lang="ts">
import { X } from "@lucide/vue";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { computed, useId, useSlots } from "vue";

import Button from "../Button/Button.vue";
import { injectAlertContext } from "./AlertRoot.vue";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the close button classes. */
  class?: string;
};

export type Emits = {
  /** Emitted before closing. Call `event.preventDefault()` to keep the alert open. */
  close: [event: CustomEvent];
};

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  asChild: undefined,
});

const emits = defineEmits<Emits>();

const { close, titleId } = injectAlertContext();

const closeId = useId();

const slots = useSlots();

const showPrimitive = computed(
  () => props.as !== undefined || props.asChild !== undefined || slots.default !== undefined,
);

const onClick = () => {
  const event = new CustomEvent("close", { cancelable: true });
  emits("close", event);
  if (!event.defaultPrevented) close();
};
</script>

<template>
  <Primitive
    v-if="showPrimitive"
    :as="as"
    :as-child="asChild"
    :class="alertClose({ class: props.class })"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot></slot>
  </Primitive>

  <Button
    v-else
    :id="closeId"
    aria-label="Close alert"
    :aria-labelledby="`${closeId} ${titleId}`"
    variant="ghost"
    size="sm"
    only-icon
    :class="alertClose({ class: props.class })"
    v-bind="$attrs"
    @click="onClick"
  >
    <X />
  </Button>
</template>
