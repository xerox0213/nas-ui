<script lang="ts">
import { computed, type ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import { tv, type VariantProps } from "../../utils/tv";

export const inputNumberRoot = tv({
  base: "group grid w-full overflow-hidden rounded-base border bg-control text-fg transition-colors has-focus-visible:focus-ring data-disabled:opacity-50",
  variants: {
    invalid: {
      false:
        "border-line-control hover:not-data-disabled:not-data-readonly:border-line-control-hover",
      true: "border-line-danger",
    },
    size: {
      sm: "text-xs leading-4",
      md: "text-sm leading-5",
      lg: "text-sm leading-5",
    },
    controls: {
      sides: "grid-cols-[auto_1fr_auto] [grid-template-areas:'decrement_input_increment']",
      stacked:
        "grid-cols-[1fr_auto] grid-rows-2 [grid-template-areas:'input_increment'_'input_decrement']",
    },
  },
});

type Variants = VariantProps<typeof inputNumberRoot>;

export const [provideNumberFieldRootContext, injectNumberFieldRootContext] = createContext<{
  size: ComputedRef<NonNullable<Variants["size"]>>;
  controls: ComputedRef<NonNullable<Variants["controls"]>>;
  invalid: ComputedRef<boolean>;
}>("number-field-context", "NumberFieldRoot");
</script>

<script setup lang="ts">
import { NumberFieldRoot, type NumberFieldRootEmits, type NumberFieldRootProps } from "reka-ui";

export type Props = NumberFieldRootProps & {
  /** Marks the value as invalid: shows the error style and sets `aria-invalid` on the input. */
  invalid?: boolean;
  /** Field size. Match it with the other fields of the form. */
  size?: Variants["size"];
  /**
   * Where the buttons go: `sides` puts − and + around the value, `stacked` stacks up and down
   * arrows on the right.
   */
  controls?: Variants["controls"];
  /** Extra classes, merged over the field classes. */
  class?: string;
};

export type Emits = NumberFieldRootEmits;

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  controls: "stacked",
  step: 1,
  allowInvalid: true,
  stepSnapping: true,
  focusOnChange: true,
});

provideNumberFieldRootContext({
  size: computed(() => props.size),
  controls: computed(() => props.controls),
  invalid: computed(() => props.invalid),
});

const emits = defineEmits<Emits>();
</script>

<template>
  <NumberFieldRoot
    :id="id"
    v-slot="defaultProps"
    :model-value="modelValue"
    :as="as"
    :as-child="asChild"
    :name="name"
    :default-value="defaultValue"
    :allow-invalid="allowInvalid"
    :disabled="disabled"
    :disable-wheel-change="disableWheelChange"
    :focus-on-change="focusOnChange"
    :format-options="formatOptions"
    :invert-wheel-change="invertWheelChange"
    :locale="locale"
    :max="max"
    :min="min"
    :readonly="readonly"
    :required="required"
    :starting-value="startingValue"
    :step="step"
    :step-snapping="stepSnapping"
    :class="inputNumberRoot({ invalid, size, controls, class: props.class })"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot v-bind="defaultProps"></slot>
  </NumberFieldRoot>
</template>
