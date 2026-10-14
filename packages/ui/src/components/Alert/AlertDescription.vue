<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import type { Component } from "vue";

import { injectAlertContext } from "./alert.context";

export type Props = {
  /** Element or component to render as. */
  as?: AsTag | Component;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Extra classes, merged over the description classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  as: "p",
});

const { ui } = injectAlertContext();
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="ui.description({ class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
