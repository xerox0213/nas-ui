import preview from "#storybook/preview.ts";

import Heading, { type Props } from "./Heading.vue";

const meta = preview.meta({
  title: "Components/Heading",
  component: Heading,
});

/**
 * For the headline of a landing or marketing page.
 * Renders an `h1` with the largest style: use it instead of level 1, not in
 * addition to it.
 */
export const Display = meta.story({
  args: { level: "display" },
  render: (args: Props) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Build interfaces that last</Heading>`,
  }),
});

/**
 * For the title of a page.
 * A page has a single `h1`.
 */
export const Level1 = meta.story({
  args: { level: "1" },
  render: (args: Props) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Account settings</Heading>`,
  }),
});

/**
 * For the main sections of a page.
 * Such as "Profile" or "Security" in a settings page.
 */
export const Level2 = meta.story({
  args: { level: "2" },
  render: (args: Props) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Profile</Heading>`,
  }),
});

/**
 * For subsections inside a level 2 section.
 * Don't skip a level: an `h3` always follows an `h2`.
 */
export const Level3 = meta.story({
  args: { level: "3" },
  render: (args: Props) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Avatar</Heading>`,
  }),
});

/**
 * For small groups inside a subsection.
 * Such as a group of related fields in a form.
 */
export const Level4 = meta.story({
  args: { level: "4" },
  render: (args: Props) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Email notifications</Heading>`,
  }),
});

/**
 * For a heading whose place in the outline differs from its size.
 * Such as a sidebar section: an `h2` for screen readers that looks like a
 * level 4. `level` sets the style and `as` sets the tag.
 */
export const CustomTag = meta.story({
  args: { level: "4", as: "h2" },
  render: (args: Props) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `<Heading v-bind="args">Related articles</Heading>`,
  }),
});
