import preview from "#storybook/preview.ts";

import RadiusTokens, { type RadiusToken } from "./RadiusTokens.vue";

const tokens: RadiusToken[] = [
  { name: "--radius-base", utility: "rounded-base" },
  { name: "--radius-surface", utility: "rounded-surface" },
];

const meta = preview.meta({
  title: "Tokens/Radius",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
});

export const Radius = meta.story({
  render: () => ({
    components: { RadiusTokens },
    setup: () => ({ tokens }),
    template: `<RadiusTokens :tokens="tokens" />`,
  }),
});
