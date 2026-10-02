import { ArrowRight, ArrowUpRight, Plus, Trash2 } from "@lucide/vue";

import preview from "#storybook/preview.ts";

import NsButton, { type Props } from "./NsButton.vue";

const renderWith = (content: string) => (args: Props) => ({
  components: { NsButton, ArrowRight, ArrowUpRight, Plus, Trash2 },
  setup() {
    return { args };
  },
  template: `<NsButton v-bind="args">${content}</NsButton>`,
});

const meta = preview.meta({
  title: "Components/Button",
  component: NsButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
});

/**
 * For the main action in a view.
 * Use at most one primary button per view.
 */
export const Primary = meta.story({
  args: { variant: "primary" },
  render: renderWith("Save"),
});

/**
 * For actions that support the primary one.
 * Typically "Cancel" next to "Save". A view can have several of them.
 */
export const Secondary = meta.story({
  args: { variant: "secondary" },
  render: renderWith("Cancel"),
});

/**
 * For low-emphasis actions in dense areas.
 * Fits toolbars, table rows or card headers.
 */
export const Ghost = meta.story({
  args: { variant: "ghost" },
  render: renderWith("Edit"),
});

/**
 * For destructive or irreversible actions.
 * Ask for confirmation before deleting data.
 */
export const Danger = meta.story({
  args: { variant: "danger" },
  render: renderWith("Delete"),
});

/**
 * For actions that are temporarily unavailable.
 * For example until a form is valid. Tell the user why it is disabled.
 */
export const Disabled = meta.story({
  args: { disabled: true },
  render: renderWith("Save"),
});

/**
 * For compact areas and inline actions.
 * Use where a medium button would take too much space, such as dense tables.
 */
export const Small = meta.story({
  args: { size: "sm" },
  render: renderWith("Save"),
});

/**
 * For prominent actions that need more space.
 * Such as a form's main call to action.
 */
export const Large = meta.story({
  args: { size: "lg" },
  render: renderWith("Save"),
});

/**
 * For actions that an icon helps recognize.
 * Place the icon before or after the label; the button handles the spacing.
 */
export const WithIcon = meta.story({
  args: { variant: "secondary" },
  render: renderWith(`<Plus class="size-4" />New project`),
});

/**
 * For tight spaces with a self-explanatory icon.
 * Always provide an `aria-label` for screen readers.
 */
export const OnlyIcon = meta.story({
  args: { variant: "ghost", onlyIcon: true, "aria-label": "Delete" },
  render: renderWith(`<Trash2 class="size-4" />`),
});

/**
 * For external links that must look like a button.
 * Use `asChild` with an `<a>` so the browser handles the navigation.
 */
export const ExternalLink = meta.story({
  args: { asChild: true, variant: "secondary" },
  render: renderWith(
    `<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue docs<ArrowUpRight class="size-4" /></a>`,
  ),
});

/**
 * For internal routes that must look like a button.
 * Use `asChild` with a `<RouterLink>` so navigation stays client-side.
 */
export const InternalLink = meta.story({
  args: { asChild: true },
  render: renderWith(
    `<RouterLink to="/get-started">Get started<ArrowRight class="size-4" /></RouterLink>`,
  ),
});
