import { tv } from "../../utils/tv";

export const card = tv({
  slots: {
    base: "relative isolate rounded-surface border border-line bg-surface",
    header:
      "flex items-center justify-between border-b border-line px-4 py-2 [&_svg]:size-3.5 [&_svg]:shrink-0",
    body: "flex flex-col gap-4 p-4",
    intro: "flex flex-col gap-1",
    title: "text-heading-4 text-fg",
    description: "text-fg-muted",
    link: [
      "focus-visible:outline-none",
      "before:absolute before:-inset-px before:rounded-surface before:border before:border-transparent before:transition-colors",
      "hover:before:border-line-control-hover focus-visible:before:focus-ring",
    ],
    raised: "relative z-1",
    footer:
      "flex flex-col-reverse gap-2 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-end",
  },
});
