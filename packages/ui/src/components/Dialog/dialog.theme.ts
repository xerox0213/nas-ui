import type { VariantProps } from "tailwind-variants/dist/types.cjs";

import { tv } from "../../utils/tv";

export const dialog = tv({
  slots: {
    overlay: [
      "bg-overlay fixed inset-x-0 inset-y-0",
      "motion-safe:data-[state=open]:animate-fade-in motion-safe:data-[state=closed]:animate-fade-out",
    ],
    content: [
      "bg-surface border-line rounded-surface fixed top-1/2 right-1/2 flex max-h-[calc(100dvh-4rem)] w-[calc(100%-2rem)] translate-x-1/2 -translate-y-1/2 flex-col border shadow-xl",
      "motion-safe:data-[state=open]:animate-pop-in motion-safe:data-[state=closed]:animate-pop-out",
    ],
    header:
      "border-line flex items-center justify-between border-b py-1.5 ps-4 pe-1.5",
    label: "text-fg-subtle text-meta font-mono uppercase",
    body: "flex min-h-0 flex-col gap-4 overflow-y-auto p-4",
    intro: "flex flex-col gap-1.5",
    title: "text-fg text-heading-4",
    description: "text-fg-muted",
    footer:
      "border-line flex flex-col-reverse gap-2 border-t px-4 py-3 sm:flex-row sm:justify-end",
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
