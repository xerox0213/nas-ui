<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const heading = tv({
  base: "font-sans",
  variants: {
    level: {
      display: "text-display",
      "1": "text-heading-1",
      "2": "text-heading-2",
      "3": "text-heading-3",
      "4": "text-heading-4",
    },
  },
});

type Variants = VariantProps<typeof heading>;
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { computed } from "vue";

export type Props = PrimitiveProps & {
  /**
   * Position in the page outline. Sets the tag (`1`–`4` render `h1`–`h4`,
   * `display` renders an `h1`) and the matching type style.
   */
  level: NonNullable<Variants["level"]>;
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
