import type { VariantProps } from "tailwind-variants/dist/types.cjs";

import { tv } from "../../utils/tv";

export const alert = tv({
  slots: {
    base: "grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_auto] rounded-surface px-4 py-3",
    icon: "col-start-1 col-end-2 row-start-1 row-end-2 mr-3 size-4 shrink-0 self-center",
    title: "col-start-2 col-end-3 row-start-1 row-end-2 self-center text-label",
    close: "col-start-3 col-end-4 row-start-1 row-end-2 self-center",
    description: "col-start-2 col-end-3 row-start-2 row-end-3 mt-0.5 text-fg-muted",
    actions: "col-start-2 col-end-3 row-start-3 row-end-4 mt-3 flex flex-wrap items-center gap-2",
  },
  variants: {
    variant: {
      neutral: {
        base: "border border-line-neutral-subtle bg-neutral-subtle text-on-neutral-subtle",
      },
      success: {
        base: "border border-line-success-subtle bg-success-subtle text-on-success-subtle",
      },
      warning: {
        base: "border border-line-warning-subtle bg-warning-subtle text-on-warning-subtle",
      },
      danger: {
        base: "border border-line-danger-subtle bg-danger-subtle text-on-danger-subtle",
      },
    },
  },
});

export type AlertVariants = VariantProps<typeof alert>;
