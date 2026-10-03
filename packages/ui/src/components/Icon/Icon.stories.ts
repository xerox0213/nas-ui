import { House, TriangleAlert } from "@lucide/vue";
import { defineComponent, h } from "vue";

import preview from "#storybook/preview.ts";

import Icon from "./Icon.vue";

// Stands for an app-specific icon component whose root element is an <svg>.
const AppLogo = defineComponent({
  name: "AppLogo",
  render: () =>
    h(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
      },
      [h("circle", { cx: 12, cy: 12, r: 10 }), h("path", { d: "M8 12h8" })],
    ),
});

const meta = preview.meta({
  title: "Components/Icon",
  component: Icon,
});

/**
 * For icons next to small text.
 * Fits `text-xs` content, such as small buttons or captions.
 */
export const Small = meta.story({
  args: { as: House, size: "sm" },
});

/**
 * The default size, for icons next to body text.
 * Fits labels, body text and medium or large buttons.
 */
export const Medium = meta.story({
  args: { as: House, size: "md" },
});

/**
 * For icons next to larger text.
 * Fits headings or standalone icons that need more presence.
 */
export const Large = meta.story({
  args: { as: House, size: "lg" },
});

/**
 * For icons that carry meaning on their own.
 * Add an `aria-label` so screen readers announce it.
 */
export const WithLabel = meta.story({
  args: { as: TriangleAlert, "aria-label": "Warning" },
});

/**
 * For custom icons wrapped in a component.
 * Pass the component to `as`. Its `<svg>` must be the only root element,
 * so the size classes fall through to it.
 */
export const CustomComponent = meta.story({
  args: { as: AppLogo, size: "lg" },
});

/**
 * For custom icons that are not part of Lucide.
 * Use `asChild` to apply the size to your own `<svg>`.
 */
export const AsChild = meta.story({
  args: { asChild: true, size: "lg" },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: `
      <Icon v-bind="args">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </Icon>
    `,
  }),
});
