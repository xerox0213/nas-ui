import type { VariantProps } from "tailwind-variants/dist/types.cjs";

import { tv } from "../../utils/tv";

export const alert = tv({
  slots: {
    base: "rounded-surface grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_auto] px-4 py-3",
    icon: "col-start-1 col-end-2 row-start-1 row-end-2 mr-3 self-center",
    title: "text-label col-start-2 col-end-3 row-start-1 row-end-2 self-center",
    close: "col-start-3 col-end-4 row-start-1 row-end-2 self-center",
    description:
      "text-fg-muted col-start-2 col-end-3 row-start-2 row-end-3 mt-0.5",
    actions:
      "col-start-2 col-end-3 row-start-3 row-end-4 mt-3 flex flex-wrap items-center gap-2",
  },
  variants: {
    variant: {
      neutral: {
        base: "bg-neutral-subtle border-line-neutral-subtle text-on-neutral-subtle border",
      },
      success: {
        base: "bg-success-subtle border-line-success-subtle text-on-success-subtle border",
      },
      warning: {
        base: "bg-warning-subtle border-line-warning-subtle text-on-warning-subtle border",
      },
      danger: {
        base: "bg-danger-subtle border-line-danger-subtle text-on-danger-subtle border",
      },
    },
  },
});

export type AlertVariants = VariantProps<typeof alert>;
