import preview from "#storybook/preview.ts";

import ColorTokens, { type ColorGroup } from "./ColorTokens.vue";

const groups: ColorGroup[] = [
  {
    name: "Backgrounds",
    tokens: [
      { name: "page", utility: "bg-page" },
      { name: "surface", utility: "bg-surface" },
      { name: "hover", utility: "bg-hover" },
      { name: "overlay", utility: "bg-overlay" },
    ],
  },
  {
    name: "Text",
    tokens: [
      { name: "fg", utility: "text-fg" },
      { name: "fg-muted", utility: "text-fg-muted" },
      { name: "fg-subtle", utility: "text-fg-subtle" },
    ],
  },
  {
    name: "Borders",
    tokens: [{ name: "line", utility: "border-line" }],
  },
  {
    name: "Focus",
    tokens: [{ name: "focus", utility: "outline-focus" }],
  },
  {
    name: "Control",
    tokens: [
      { name: "control", utility: "bg-control" },
      { name: "control-emphasis", utility: "bg-control-emphasis" },
      { name: "line-control", utility: "border-line-control" },
      { name: "line-control-hover", utility: "border-line-control-hover" },
    ],
  },
  {
    name: "Primary",
    tokens: [
      { name: "primary", utility: "bg-primary" },
      { name: "primary-hover", utility: "bg-primary-hover" },
      { name: "on-primary", utility: "text-on-primary" },
      { name: "fg-primary", utility: "text-fg-primary" },
      { name: "line-primary", utility: "border-line-primary" },
    ],
  },
  {
    name: "Danger",
    tokens: [
      { name: "danger", utility: "bg-danger" },
      { name: "danger-hover", utility: "bg-danger-hover" },
      { name: "on-danger", utility: "text-on-danger" },
      { name: "fg-danger", utility: "text-fg-danger" },
      { name: "line-danger", utility: "border-line-danger" },
      { name: "danger-subtle", utility: "bg-danger-subtle" },
      { name: "on-danger-subtle", utility: "text-on-danger-subtle" },
      { name: "line-danger-subtle", utility: "border-line-danger-subtle" },
    ],
  },
  {
    name: "Success",
    tokens: [
      { name: "success-subtle", utility: "bg-success-subtle" },
      { name: "on-success-subtle", utility: "text-on-success-subtle" },
      { name: "line-success-subtle", utility: "border-line-success-subtle" },
    ],
  },
  {
    name: "Warning",
    tokens: [
      { name: "warning-subtle", utility: "bg-warning-subtle" },
      { name: "on-warning-subtle", utility: "text-on-warning-subtle" },
      { name: "line-warning-subtle", utility: "border-line-warning-subtle" },
    ],
  },
  {
    name: "Neutral",
    tokens: [
      { name: "neutral-subtle", utility: "bg-neutral-subtle" },
      { name: "on-neutral-subtle", utility: "text-on-neutral-subtle" },
      { name: "line-neutral-subtle", utility: "border-line-neutral-subtle" },
    ],
  },
  {
    name: "Disabled",
    tokens: [
      { name: "disabled", utility: "bg-disabled" },
      { name: "fg-disabled", utility: "text-fg-disabled" },
      { name: "line-disabled", utility: "border-line-disabled" },
      { name: "disabled-emphasis", utility: "bg-disabled-emphasis" },
      { name: "on-disabled-emphasis", utility: "text-on-disabled-emphasis" },
    ],
  },
  {
    name: "Components",
    tokens: [
      { name: "kbd", utility: "bg-kbd" },
      { name: "thumb", utility: "bg-thumb" },
    ],
  },
];

const meta = preview.meta({
  title: "Tokens/Colors",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
});

export const Colors = meta.story({
  render: () => ({
    components: { ColorTokens },
    setup: () => ({ groups }),
    template: `<ColorTokens :groups="groups" />`,
  }),
});
