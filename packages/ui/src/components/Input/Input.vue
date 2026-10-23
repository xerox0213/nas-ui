<script lang="ts">
import { tv, type VariantProps } from "../../utils/tv";

export const input = tv({
  base: "w-full rounded-base border bg-control text-fg transition-colors placeholder:text-fg-subtle disabled:opacity-50",
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

type Variants = VariantProps<typeof input>;
</script>

<script setup lang="ts">
import type { HTMLAttributes, InputTypeHTMLAttribute } from "vue";

export type Props = {
  /** The value when initially rendered, when uncontrolled. */
  defaultValue?: string;
  /**
   * Kind of value expected, such as `email`, `password` or `search`. It sets
   * the browser validation and the keyboard shown on mobile.
   */
  type?: InputTypeHTMLAttribute;
  /**
   * Keyboard shown on mobile, independently of `type`, such as `numeric` for a
   * verification code or `decimal` for an amount.
   */
  inputmode?: HTMLAttributes["inputmode"];
  /** Example of the expected value, shown while the input is empty. Not a label replacement. */
  placeholder?: string;
  /** Key of the value in the submitted form data. Without it, the value is not submitted. */
  name?: string;
  /** Must be filled before the form can be submitted. Screen readers announce it as required. */
  required?: boolean;
  /**
   * Kind of data the browser and password managers can fill in, such as `email`,
   * `current-password` or `off`.
   */
  autocomplete?: string;
  /** Prevents interaction and skips the value on form submit. */
  disabled?: boolean;
  /** Prevents editing but keeps the value focusable, selectable and submitted. */
  readonly?: boolean;
  /** Marks the value as invalid: shows the error style and sets `aria-invalid`. */
  invalid?: boolean;
  /** Input size. */
  size?: Variants["size"];
  /** Extra classes, merged over the variant classes. */
  class?: string;
};

const props = withDefaults(defineProps<Props>(), { size: "md" });

/** Value of the input. */
const model = defineModel<string>({
  default: (props) => (typeof props.defaultValue === "string" ? props.defaultValue : ""),
});
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :inputmode="inputmode"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :autocomplete="autocomplete"
    :disabled="disabled"
    :readonly="readonly"
    :aria-invalid="invalid || undefined"
    :class="input({ invalid, size, class: props.class })"
  />
</template>
