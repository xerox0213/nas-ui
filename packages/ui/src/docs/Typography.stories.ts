import preview from "#storybook/preview.ts";

import TypographyTokens, { type TypographyGroup } from "./TypographyTokens.vue";

const groups: TypographyGroup[] = [
  {
    name: "Fonts",
    tokens: [
      { name: "--font-sans", utility: "font-sans" },
      { name: "--font-mono", utility: "font-mono" },
    ],
  },
  {
    name: "Headings",
    tokens: [
      { name: "--text-display", utility: "text-display" },
      { name: "--text-heading-1", utility: "text-heading-1" },
      { name: "--text-heading-2", utility: "text-heading-2" },
      { name: "--text-heading-3", utility: "text-heading-3" },
      { name: "--text-heading-4", utility: "text-heading-4" },
    ],
  },
  {
    name: "Body",
    tokens: [
      { name: "--text-body-lg", utility: "text-body-lg" },
      { name: "--text-body", utility: "text-body" },
    ],
  },
  {
    name: "UI",
    tokens: [
      { name: "--text-label", utility: "text-label" },
      { name: "--text-caption", utility: "text-caption" },
      { name: "--text-meta", utility: "text-meta" },
    ],
  },
];

const meta = preview.meta({
  title: "Tokens/Typography",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
});

export const Typography = meta.story({
  render: () => ({
    components: { TypographyTokens },
    setup: () => ({ groups }),
    template: `<TypographyTokens :groups="groups" />`,
  }),
});
