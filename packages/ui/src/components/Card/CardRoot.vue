<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { computed } from "vue";

import { provideCardContext } from "./card.context";
import { card } from "./card.theme";

export type Props = PrimitiveProps & {
  /** Extra classes, merged over the base classes. */
  class?: string;
};

const props = defineProps<Props>();

const ui = computed(() => card());

provideCardContext({ ui });
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="ui.base({ class: props.class })">
    <slot></slot>
  </Primitive>
</template>
