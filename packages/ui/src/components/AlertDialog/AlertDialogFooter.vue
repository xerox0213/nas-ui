<script setup lang="ts">
import { type AsTag, Primitive } from "reka-ui";
import type { Component } from "vue";

import { injectAlertDialogContext } from "./alert-dialog.context";

export type Props = {
  /** Element or component to render as. */
  as?: AsTag | Component;
  /** Render the child element instead, merging props and behavior onto it. */
  asChild?: boolean;
  /** Extra classes, merged over the footer classes. */
  class?: string;
};

const props = defineProps<Props>();

const { ui } = injectAlertDialogContext();
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="ui.footer({ class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
