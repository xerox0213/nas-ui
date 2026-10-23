<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const textarea = tv({
  base: "field-sizing-content min-h-16 w-full resize-y rounded-base border bg-control text-fg transition-colors placeholder:text-fg-subtle disabled:opacity-50",
  variants: {
    invalid: {
      false: "border-line-control hover:not-read-only:border-line-control-hover",
      true: "border-line-danger",
    },
    size: {
      sm: "px-2.5 py-1.25 text-xs",
      md: "px-3 py-1.25 text-sm",
      lg: "px-4 py-1.75 text-sm",
    },
  },
});

type Variants = VariantProps<typeof textarea>;
</script>

<script setup lang="ts">
export type Props = {
  /** The value when initially rendered, when uncontrolled. */
  defaultValue?: string;
  /** Example of the expected value, shown while the textarea is empty. Not a label replacement. */
  placeholder?: string;
  /** Key of the value in the submitted form data. Without it, the value is not submitted. */
  name?: string;
  /** Must be filled before the form can be submitted. Screen readers announce it as required. */
  required?: boolean;
  /** Kind of data the browser can fill in, such as `street-address`, or `off`. */
  autocomplete?: string;
  /** Maximum number of characters. The browser stops input past it; show a counter so the limit isn't a surprise. */
  maxlength?: number;
  /** Prevents interaction and skips the value on form submit. */
  disabled?: boolean;
  /** Prevents editing but keeps the value focusable, selectable and submitted. */
  readonly?: boolean;
  /** Marks the value as invalid: shows the error style and sets `aria-invalid`. */
  invalid?: boolean;
  /** Textarea size. */
  size?: Variants["size"];
  /** Extra classes, merged over the variant classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), { size: "md" });

/** Value of the textarea. */
const model = defineModel<string>({
  default: (props) => (typeof props.defaultValue === "string" ? props.defaultValue : ""),
});
</script>

<template>
  <textarea
    v-model="model"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :autocomplete="autocomplete"
    :maxlength="maxlength"
    :disabled="disabled"
    :readonly="readonly"
    :aria-invalid="invalid || undefined"
    :class="textarea({ invalid, size, class: props.class })"
  />
</template>
