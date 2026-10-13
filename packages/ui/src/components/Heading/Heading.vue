<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { computed } from "vue";

import { heading, type HeadingVariants } from "./heading.theme";

export type Props = PrimitiveProps & {
  /**
   * Position in the page outline. Sets the tag (`1`–`4` render `h1`–`h4`,
   * `display` renders an `h1`) and the matching type style.
   */
  level: NonNullable<HeadingVariants["level"]>;
  /** Extra classes, merged over the level classes. */
  class?: string;
};

const props = defineProps<Props>();

const defaultTag = computed(() => {
  const level = props.level;

  switch (level) {
    case "display": {
      return "h1";
    }
    case "1": {
      return "h1";
    }
    case "2": {
      return "h2";
    }
    case "3": {
      return "h3";
    }
    case "4": {
      return "h4";
    }
    default: {
      const _exhaustiveCheck: never = level;
      return _exhaustiveCheck;
    }
  }
});
</script>

<template>
  <Primitive
    :as="as ?? defaultTag"
    :as-child="asChild"
    :class="heading({ level, class: props.class })"
  >
    <slot></slot>
  </Primitive>
</template>
