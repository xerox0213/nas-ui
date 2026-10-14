<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import type { Component } from "vue";

import { injectDialogContext } from "./dialog.context";

export type Props = {
  /** Element or component to render as. */
  as?: AsTag | Component;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Extra classes, merged over the body classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectDialogContext();
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="ui.body({ class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
