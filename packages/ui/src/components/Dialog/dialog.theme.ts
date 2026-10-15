import type { VariantProps } from "tailwind-variants/dist/types.cjs";

import { tv } from "../../utils/tv";

export const dialog = tv({
  slots: {
    overlay: [
      "fixed inset-x-0 inset-y-0 bg-overlay",
      "motion-safe:data-[state=closed]:animate-fade-out motion-safe:data-[state=open]:animate-fade-in",
    ],
    content: [
      "fixed top-1/2 right-1/2 flex max-h-[calc(100dvh-4rem)] w-[calc(100%-2rem)] translate-x-1/2 -translate-y-1/2 flex-col rounded-surface border border-line bg-surface shadow-xl",
      "motion-safe:data-[state=closed]:animate-pop-out motion-safe:data-[state=open]:animate-pop-in",
    ],
    header:
      "flex items-center justify-between border-b border-line py-1.5 ps-4 pe-1.5 [&_svg]:size-3.5 [&_svg]:shrink-0",
    label: "font-mono text-meta text-fg-subtle uppercase",
    body: "flex min-h-0 flex-col gap-4 overflow-y-auto p-4",
    intro: "flex flex-col gap-1.5",
    title: "text-heading-4 text-fg",
    description: "text-fg-muted",
    footer: "flex flex-col-reverse gap-2 border-t border-line px-4 py-3 sm:flex-row sm:justify-end",
  },
  variants: {
    size: {
      sm: {
        content: "max-w-sm",
      },
      md: {
        content: "max-w-lg",
      },
      lg: {
        content: "max-w-2xl",
      },
    },
  },
});

export type DialogVariants = VariantProps<typeof dialog>;
