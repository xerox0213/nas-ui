<script lang="ts">
import { tv } from "../../utils/tv";

export const switchThumb = tv({
  base: "inline-block size-4 rounded-base bg-thumb transition-transform data-[state=checked]:translate-x-full",
});
</script>

<script setup lang="ts">
import { SwitchThumb, type SwitchThumbProps } from "reka-ui";

export type Props = SwitchThumbProps & {
  /** Extra classes, merged over the thumb classes. */
  class?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <SwitchThumb :as="as" :as-child="asChild" :class="switchThumb({ class: props.class })">
    <slot></slot>
  </SwitchThumb>
</template>
