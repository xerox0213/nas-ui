<script setup lang="ts" generic="TrueValue = true, FalseValue = false">
import { SwitchRoot, type SwitchRootProps } from "reka-ui";
import { computed } from "vue";

import { provideSwitchContext } from "./switch.context";
import { switchh } from "./switch.theme";

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

const ui = computed(() => switchh());

provideSwitchContext({ ui });
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
    :class="ui.base({ class: props.class })"
  >
    <template #default="defaultProps">
      <slot v-bind="defaultProps"></slot>
    </template>
  </SwitchRoot>
</template>
