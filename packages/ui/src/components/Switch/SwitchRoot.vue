<script lang="ts">
import { tv } from "../../utils/tv";

export const switchRoot = tv({
  base: [
    "inline-flex h-5 w-9 items-center justify-start rounded-base p-0.5 transition-colors",
    "data-[state=unchecked]:bg-control-emphasis data-[state=unchecked]:not-data-disabled:hover:bg-control-emphasis-hover",
    "data-[state=checked]:bg-primary data-[state=checked]:not-data-disabled:hover:bg-primary-hover",
    "data-disabled:opacity-50",
  ],
});
</script>

<script setup lang="ts" generic="TrueValue = true, FalseValue = false">
import { SwitchRoot, type SwitchRootProps } from "reka-ui";

export type Props<TrueValue = true, FalseValue = false> = Pick<
  SwitchRootProps,
  "id" | "as" | "asChild" | "value" | "name" | "required" | "disabled"
> & {
  /** The state of the switch when it is initially rendered, when uncontrolled. */
  defaultValue?: TrueValue | FalseValue;
  /** The value used when the switch is on. Defaults to `true`. */
  trueValue?: TrueValue;
  /** The value used when the switch is off. Defaults to `false`. */
  falseValue?: FalseValue;
  /** Extra classes, merged over the root classes. */
  class?: string;
};

const props = defineProps<Props<TrueValue, FalseValue>>();

/** Value of the switch: `trueValue` when on, `falseValue` when off. */
const model = defineModel<TrueValue | FalseValue>();
</script>

<template>
  <SwitchRoot
    :id="id"
    v-model="model"
    :as="as"
    :as-child="asChild"
    :default-value="defaultValue"
    :true-value="trueValue"
    :false-value="falseValue"
    :value="value"
    :name="name"
    :required="required"
    :disabled="disabled"
    :class="switchRoot({ class: props.class })"
  >
    <template #default="defaultProps">
      <slot v-bind="defaultProps"></slot>
    </template>
  </SwitchRoot>
</template>
