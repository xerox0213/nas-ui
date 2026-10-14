import preview from "#storybook/preview.ts";

import Eyebrow, { type Props } from "./Eyebrow.vue";

const meta = preview.meta({
  title: "Components/Eyebrow",
  component: Eyebrow,
});

/**
 * For a short label that introduces what follows.
 * A category, a section or metadata above a title. Card and Dialog headers
 * use it the same way.
 */
export const Default = meta.story({
  render: (args: Props) => ({
    components: { Eyebrow },
    setup() {
      return { args };
    },
    template: `<Eyebrow v-bind="args">Changelog</Eyebrow>`,
  }),
});
