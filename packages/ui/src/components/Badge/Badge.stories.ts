import { CircleCheck } from "@lucide/vue";

import preview from "#storybook/preview.ts";

import Badge, { type Props } from "./Badge.vue";

const meta = preview.meta({
  title: "Components/Badge",
  component: Badge,
});

/**
 * For statuses with no particular tone.
 * Such as a category, a count or "Draft". This is the default variant.
 */
export const Neutral = meta.story({
  args: { variant: "neutral" },
  render: (args: Props) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Draft</Badge>`,
  }),
});

/**
 * For positive or completed states.
 * Such as "Active", "Paid" or "Deployed".
 */
export const Success = meta.story({
  args: { variant: "success" },
  render: (args: Props) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Active</Badge>`,
  }),
});

/**
 * For states that need attention soon.
 * Such as "Pending", "Expiring" or "Trial".
 */
export const Warning = meta.story({
  args: { variant: "warning" },
  render: (args: Props) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Pending</Badge>`,
  }),
});

/**
 * For failed or blocking states.
 * Such as "Failed", "Overdue" or "Blocked".
 */
export const Danger = meta.story({
  args: { variant: "danger" },
  render: (args: Props) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Failed</Badge>`,
  }),
});

/**
 * For dense areas such as table cells.
 * Fits next to small text or inside compact lists.
 */
export const Small = meta.story({
  args: { size: "sm" },
  render: (args: Props) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Draft</Badge>`,
  }),
});

/**
 * For badges next to larger text.
 * Such as page or card headers.
 */
export const Large = meta.story({
  args: { size: "lg" },
  render: (args: Props) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args">Draft</Badge>`,
  }),
});

/**
 * For statuses that an icon helps recognize.
 * Place the icon before the label; the badge handles the spacing.
 */
export const WithIcon = meta.story({
  args: { variant: "success" },
  render: (args: Props) => ({
    components: { Badge, CircleCheck },
    setup() {
      return { args };
    },
    template: `<Badge v-bind="args"><CircleCheck />Deployed</Badge>`,
  }),
});
