import { ref } from "vue";

import preview from "#storybook/preview.ts";

import NumberFieldDecrement from "./NumberFieldDecrement.vue";
import NumberFieldIncrement from "./NumberFieldIncrement.vue";
import NumberFieldInput from "./NumberFieldInput.vue";
import NumberFieldRoot, { type Props } from "./NumberFieldRoot.vue";

const numberFieldComponents = {
  NumberFieldRoot,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
};

const meta = preview.meta({
  title: "Components/NumberField",
  component: NumberFieldRoot,
  subcomponents: {
    NumberFieldDecrement,
    NumberFieldInput,
    NumberFieldIncrement,
  },
});

/**
 * For a number the user mostly types, such as a duration or an amount; the
 * arrows on the right only fine-tune it. Set `min` and `max`: the arrows are
 * disabled at the limits.
 */
export const Default = meta.story({
  args: { defaultValue: 30, min: 0, max: 120, step: 5 },
  render: (args: Props) => ({
    components: numberFieldComponents,
    setup() {
      return { args };
    },
    template: `
      <NumberFieldRoot v-bind="args">
        <NumberFieldInput aria-label="Duration in minutes" />
        <NumberFieldIncrement />
        <NumberFieldDecrement />
      </NumberFieldRoot>
    `,
  }),
});

/**
 * For a value that fails validation, for example a quantity above the stock.
 * Set `invalid` on the root: the field shows the error style and the input gets
 * `aria-invalid`. Say what is wrong in a message linked with
 * `aria-describedby`, so screen readers announce it.
 */
export const Invalid = meta.story({
  args: { defaultValue: 12, min: 1, invalid: true },
  render: (args: Props) => ({
    components: numberFieldComponents,
    setup() {
      return { args };
    },
    template: `
      <NumberFieldRoot v-bind="args">
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Quantity" />
        <NumberFieldIncrement />
      </NumberFieldRoot>
    `,
  }),
});

/**
 * For a small whole number the user adjusts by clicking, such as a quantity in
 * a cart. `controls="sides"` puts larger − and + buttons on each side of the
 * value, easier to hit, especially on touch screens.
 */
export const Sides = meta.story({
  args: { defaultValue: 1, min: 1, max: 10, controls: "sides" },
  render: (args: Props) => ({
    components: numberFieldComponents,
    setup() {
      return { args };
    },
    template: `
      <NumberFieldRoot v-bind="args">
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Quantity" />
        <NumberFieldIncrement />
      </NumberFieldRoot>
    `,
  }),
});

/**
 * For a value with a unit, such as a price or a percentage.
 * `formatOptions` takes `Intl.NumberFormat` options: the field shows the
 * formatted value while `v-model` keeps the plain number.
 */
export const Formatted = meta.story({
  args: {
    defaultValue: 19.99,
    min: 0,
    step: 0.5,
    locale: "fr-BE",
    formatOptions: { style: "currency", currency: "EUR" },
  },
  render: (args: Props) => ({
    components: numberFieldComponents,
    setup() {
      return { args };
    },
    template: `
      <NumberFieldRoot v-bind="args">
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Price" />
        <NumberFieldIncrement />
      </NumberFieldRoot>
    `,
  }),
});

/**
 * For a value the user can see but not change right now, for example one
 * locked by their plan. A disabled value is not submitted with the form.
 */
export const Disabled = meta.story({
  args: { defaultValue: 5, disabled: true },
  render: (args: Props) => ({
    components: numberFieldComponents,
    setup() {
      return { args };
    },
    template: `
      <NumberFieldRoot v-bind="args">
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Seats" />
        <NumberFieldIncrement />
      </NumberFieldRoot>
    `,
  }),
});

/**
 * For reading or setting the value from your own state.
 * Bind it with `v-model`, for example to update a total as the quantity changes.
 */
export const Controlled = meta.story({
  args: { min: 0, max: 10 },
  render: (args: Props) => ({
    components: numberFieldComponents,
    setup() {
      const quantity = ref(2);
      return { args, quantity };
    },
    template: `
      <div class="flex flex-col gap-4">
        <NumberFieldRoot v-bind="args" v-model="quantity">
          <NumberFieldDecrement />
          <NumberFieldInput aria-label="Quantity" />
          <NumberFieldIncrement />
        </NumberFieldRoot>
        <p class="text-fg-muted">Total: {{ (quantity ?? 0) * 12 }} €</p>
      </div>
    `,
  }),
});
