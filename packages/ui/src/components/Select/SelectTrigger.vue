<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const selectTrigger = tv({
  base: "group flex w-full items-center gap-2 rounded-base border bg-control text-left text-fg transition-colors data-disabled:opacity-50 data-placeholder:text-fg-subtle",
  variants: {
    invalid: {
      false: "border-line-control hover:not-data-disabled:border-line-control-hover",
      true: "border-line-danger",
    },
    size: {
      sm: "py-1.25 ps-2.5 pe-1.5 text-xs [&_svg]:size-3.5",
      md: "py-1.25 ps-3 pe-2 text-sm [&_svg]:size-4",
      lg: "py-1.75 ps-4 pe-3 text-sm [&_svg]:size-4",
    },
  },
});

type Variants = VariantProps<typeof selectTrigger>;
</script>

<script setup lang="ts">
import { SelectTrigger, type SelectTriggerProps } from "reka-ui";

import SelectIcon from "./SelectIcon.vue";
import { injectSelectContext } from "./SelectRoot.vue";
import SelectValue, { type Props as SelectValueProps } from "./SelectValue.vue";

export type Props = SelectTriggerProps &
  Pick<SelectValueProps, "placeholder"> & {
    /** Trigger size. Match it with the other fields of the form. */
    size?: Variants["size"];
    /** Extra classes, merged over the trigger classes. */
    class?: string;
  };

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const { invalid } = injectSelectContext();
</script>

<template>
  <SelectTrigger
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :reference="reference"
    :aria-invalid="invalid || undefined"
    :class="selectTrigger({ size, invalid, class: props.class })"
  >
    <slot>
      <SelectValue :placeholder="placeholder" />
      <SelectIcon />
    </slot>
  </SelectTrigger>
</template>
