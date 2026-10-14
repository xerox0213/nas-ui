import { ArrowRight, ArrowUpRight, Plus, Trash2 } from "@lucide/vue";

import preview from "#storybook/preview.ts";

import Button, { type Props } from "./Button.vue";

const meta = preview.meta({
  title: "Components/Button",
  component: Button,
});

/**
 * For the main action in a view.
 * Use at most one primary button per view.
 */
export const Primary = meta.story({
  args: { variant: "primary" },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Save</Button>`,
  }),
});

/**
 * For actions that support the primary one.
 * Typically "Cancel" next to "Save". A view can have several of them.
 */
export const Secondary = meta.story({
  args: { variant: "secondary" },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Cancel</Button>`,
  }),
});

/**
 * For low-emphasis actions in dense areas.
 * Fits toolbars, table rows or card headers.
 */
export const Ghost = meta.story({
  args: { variant: "ghost" },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Edit</Button>`,
  }),
});

/**
 * For destructive or irreversible actions.
 * Ask for confirmation before deleting data.
 */
export const Danger = meta.story({
  args: { variant: "danger" },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Delete</Button>`,
  }),
});

/**
 * For actions that are temporarily unavailable.
 * For example until a form is valid. Tell the user why it is disabled.
 */
export const Disabled = meta.story({
  args: { disabled: true },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Save</Button>`,
  }),
});

/**
 * For compact areas and inline actions.
 * Use where a medium button would take too much space, such as dense tables.
 */
export const Small = meta.story({
  args: { size: "sm" },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Save</Button>`,
  }),
});

/**
 * For prominent actions that need more space.
 * Such as a form's main call to action.
 */
export const Large = meta.story({
  args: { size: "lg" },
  render: (args: Props) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Save</Button>`,
  }),
});

/**
 * For actions that an icon helps recognize.
 * Place the icon before or after the label; the button handles the spacing.
 */
export const WithIcon = meta.story({
  args: { variant: "secondary" },
  render: (args: Props) => ({
    components: { Button, Plus },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args"><Plus />New project</Button>`,
  }),
});

/**
 * For tight spaces with a self-explanatory icon.
 * Always provide an `aria-label` for screen readers.
 */
export const OnlyIcon = meta.story({
  args: { variant: "ghost", onlyIcon: true, "aria-label": "Delete" },
  render: (args: Props) => ({
    components: { Button, Trash2 },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args"><Trash2 /></Button>`,
  }),
});

/**
 * For external links that must look like a button.
 * Use `asChild` with an `<a>` so the browser handles the navigation.
 */
export const ExternalLink = meta.story({
  args: { asChild: true, variant: "secondary" },
  render: (args: Props) => ({
    components: { Button, ArrowUpRight },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue docs<ArrowUpRight /></a>
      </Button>
    `,
  }),
});

/**
 * For internal routes that must look like a button.
 * Use `asChild` with a `<RouterLink>` so navigation stays client-side.
 */
export const InternalLink = meta.story({
  args: { asChild: true },
  render: (args: Props) => ({
    components: { Button, ArrowRight },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <RouterLink to="/get-started">Get started<ArrowRight /></RouterLink>
      </Button>
    `,
  }),
});
