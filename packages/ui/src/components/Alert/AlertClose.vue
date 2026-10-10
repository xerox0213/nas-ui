<script setup lang="ts">
import { X } from "@lucide/vue";
import { type AsTag, Primitive } from "reka-ui";
import { type Component, computed, useId, useSlots } from "vue";

import Button from "../Button/Button.vue";
import Icon from "../Icon/Icon.vue";
import { injectAlertContext } from "./alert.context.ts";

defineOptions({
  inheritAttrs: false,
});

export type Props = {
  /** Element or component to render as. */
  as?: AsTag | Component;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Extra classes, merged over the close button classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  asChild: undefined,
});

export type Emits = {
  /** Emitted before closing. Call `event.preventDefault()` to keep the alert open. */
  close: [event: CustomEvent];
};

const emits = defineEmits<Emits>();

const { ui, close, titleId } = injectAlertContext();

const closeId = useId();

const slots = useSlots();

const showPrimitive = computed(
  () =>
    props.as !== undefined ||
    props.asChild !== undefined ||
    slots.default !== undefined,
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
    :class="ui.close({ class: props.class })"
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
    :class="ui.close({ class: props.class })"
    v-bind="$attrs"
    @click="onClick"
  >
    <Icon :as="X" size="md" />
  </Button>
</template>
