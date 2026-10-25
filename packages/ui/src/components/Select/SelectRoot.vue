<script lang="ts">
import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";

export const [provideSelectContext, injectSelectContext] = createContext<{
  invalid: ComputedRef<boolean>;
}>("SelectContext", "SelectRoot");
</script>

<script
  setup
  lang="ts"
  generic="T extends AcceptableValue = AcceptableValue, M extends boolean = false"
>
import { SelectRoot, type AcceptableValue, type SelectRootProps } from "reka-ui";
import { computed } from "vue";

import type { SingleOrMultiple } from "../../utils/types";

export type Props<T = AcceptableValue, M extends boolean = false> = Pick<
  SelectRootProps<T>,
  | "autocomplete"
  | "by"
  | "defaultOpen"
  | "dir"
  | "disabled"
  | "multiple"
  | "name"
  | "nullableValue"
  | "required"
> & {
  /** The selected value when initially rendered, when uncontrolled. An array when `multiple` is set. */
  defaultValue?: SingleOrMultiple<M, T>;
  /** Allow several options to be selected at the same time. The value becomes an array. */
  multiple?: M;
  /** Marks the value as invalid: shows the error style on the trigger and sets `aria-invalid`. */
  invalid?: boolean;
};

const props = defineProps<Props<T, M>>();

provideSelectContext({ invalid: computed(() => props.invalid) });

type ModelValue = M extends true ? T[] : T | undefined;

/** Selected value: an array when `multiple` is set. */
const model = defineModel<ModelValue>({
  default: (props) =>
    (props.defaultValue ?? (props.multiple ? [] : undefined)) as NonNullable<ModelValue>,
});

/** Whether the list of options is open. */
const open = defineModel<boolean>("open", { default: (props) => props.defaultOpen ?? false });
</script>

<template>
  <SelectRoot
    v-slot="defaultProps"
    v-model="model"
    v-model:open="open"
    :autocomplete="autocomplete"
    :by="by"
    :dir="dir"
    :default-open="defaultOpen"
    :disabled="disabled"
    :multiple="multiple"
    :name="name"
    :nullable-value="nullableValue"
    :required="required"
  >
    <slot v-bind="defaultProps"></slot>
  </SelectRoot>
</template>
