<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import { type Component, computed, useId } from "vue";

import { provideAlertContext } from "./alert.context";
import { alert, type AlertVariants } from "./alert.theme";

export type Props = {
  /** Element or component to render as. */
  as?: AsTag | Component;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Semantic tone. Also picks the default `AlertIcon`. */
  variant?: AlertVariants["variant"];
  /** Extra classes, merged over the base classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "neutral",
});

/** Alert visibility: leave unbound and `AlertClose` dismisses it on its own. */
const open = defineModel<boolean>("open", { default: true });

const ui = computed(() => alert({ variant: props.variant }));

const variant = computed(() => props.variant);

const close = () => {
  open.value = false;
};

const titleId = useId();

provideAlertContext({ ui, variant, close, titleId });
</script>

<template>
  <Primitive
    v-if="open"
    :as="as"
    :as-child="asChild"
    role="alert"
    :class="ui.base({ class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
