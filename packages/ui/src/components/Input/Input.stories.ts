import { ref } from "vue";

import preview from "#storybook/preview.ts";

import Input, { type Props } from "./Input.vue";

const meta = preview.meta({
  title: "Components/Input",
  component: Input,
});

/**
 * For a short, single-line value such as a name or an email.
 * Give it a visible label linked with `for` / `id`: the placeholder disappears
 * as soon as the user types, so it cannot replace the label.
 */
export const Default = meta.story({
  args: { type: "email", placeholder: "jane@example.com" },
  render: (args: Props) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `<Input v-bind="args" aria-label="Email" />`,
  }),
});

/**
 * For a value that fails validation, after the user leaves the field or submits.
 * Say what is wrong in a message linked with `aria-describedby`, so screen
 * readers announce it along with the invalid state.
 */
export const Invalid = meta.story({
  args: { type: "email", invalid: true },
  render: (args: Props) => ({
    components: { Input },
    setup() {
      const email = ref("jane@example");
      return { args, email };
    },
    template: `<Input v-bind="args" v-model="email" aria-label="Email" />`,
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
    components: { Input },
    setup() {
      const company = ref("Acme Inc.");
      return { args, company };
    },
    template: `<Input v-bind="args" v-model="company" aria-label="Company" />`,
  }),
});

/**
 * For a value the user needs to read or copy but never edit, such as an ID or
 * an API key. Unlike `disabled`, it stays focusable and selectable, and it is
 * submitted with the form.
 */
export const ReadOnly = meta.story({
  args: { readonly: true },
  render: (args: Props) => ({
    components: { Input },
    setup() {
      const workspaceId = ref("ws_8f3a2c91");
      return { args, workspaceId };
    },
    template: `<Input v-bind="args" v-model="workspaceId" aria-label="Workspace ID" />`,
  }),
});

/**
 * For reading the value from your own state.
 * Bind it with `v-model`, for example to filter a list as the user types.
 */
export const Controlled = meta.story({
  args: { type: "search", placeholder: "Search members" },
  render: (args: Props) => ({
    components: { Input },
    setup() {
      const query = ref("");
      return { args, query };
    },
    template: `
      <div class="flex max-w-sm flex-col gap-4">
        <Input v-bind="args" v-model="query" aria-label="Search members" />
        <p class="text-fg-muted">Query: {{ query }}</p>
      </div>
    `,
  }),
});
