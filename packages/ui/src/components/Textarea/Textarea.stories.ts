import { ref } from "vue";

import preview from "#storybook/preview.ts";

import Textarea, { type Props } from "./Textarea.vue";

const meta = preview.meta({
  title: "Components/Textarea",
  component: Textarea,
});

/**
 * For a free-form value that can span several lines, such as a message or a
 * description. For a short, single-line value, use an input instead.
 * Give it a visible label linked with `for` / `id`: the placeholder disappears
 * as soon as the user types, so it cannot replace the label.
 */
export const Default = meta.story({
  args: { placeholder: "Tell us what happened…" },
  render: (args: Props) => ({
    components: { Textarea },
    setup() {
      return { args };
    },
    template: `<Textarea v-bind="args" aria-label="Message" />`,
  }),
});

/**
 * For a value that fails validation, after the user leaves the field or submits.
 * Say what is wrong in a message linked with `aria-describedby`, so screen
 * readers announce it along with the invalid state.
 */
export const Invalid = meta.story({
  args: { invalid: true },
  render: (args: Props) => ({
    components: { Textarea },
    setup() {
      const message = ref("Hi");
      return { args, message };
    },
    template: `<Textarea v-bind="args" v-model="message" aria-label="Message" />`,
  }),
});

/**
 * For a value the user can see but not change right now, for example one
 * locked until another field is filled. A disabled value is not submitted with
 * the form.
 */
export const Disabled = meta.story({
  args: { disabled: true },
  render: (args: Props) => ({
    components: { Textarea },
    setup() {
      const notes = ref("Delivery on weekdays only.");
      return { args, notes };
    },
    template: `<Textarea v-bind="args" v-model="notes" aria-label="Delivery notes" />`,
  }),
});

/**
 * For a long value the user needs to read or copy but never edit, such as a
 * generated summary. Unlike `disabled`, it stays focusable and selectable, and
 * it is submitted with the form.
 */
export const ReadOnly = meta.story({
  args: { readonly: true },
  render: (args: Props) => ({
    components: { Textarea },
    setup() {
      const summary = ref(
        "Order #4821 shipped on October 21.\nTracking number: 1Z999AA10123456784.",
      );
      return { args, summary };
    },
    template: `<Textarea v-bind="args" v-model="summary" aria-label="Order summary" />`,
  }),
});

/**
 * For reading the value from your own state.
 * Bind it with `v-model`, for example to show how many characters are left.
 */
export const Controlled = meta.story({
  args: { maxlength: 160 },
  render: (args: Props) => ({
    components: { Textarea },
    setup() {
      const bio = ref("");
      return { args, bio };
    },
    template: `
      <div class="flex max-w-sm flex-col gap-4">
        <Textarea v-bind="args" v-model="bio" aria-label="Bio" />
        <p class="text-fg-muted">{{ args.maxlength - bio.length }} characters left</p>
      </div>
    `,
  }),
});
