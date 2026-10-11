import { tv } from "../../utils/tv";

export const card = tv({
  slots: {
    base: "bg-surface border-line rounded-surface relative isolate border",
    header: "border-line flex items-center justify-between border-b px-4 py-2",
    body: "flex flex-col gap-4 p-4",
    intro: "flex flex-col gap-1",
    title: "text-fg text-heading-4",
    description: "text-fg-muted",
    link: [
      "focus-visible:outline-none",
      "before:rounded-surface before:absolute before:-inset-px before:border before:border-transparent before:transition-colors",
      "focus-visible:before:focus-ring hover:before:border-line-control-hover",
    ],
    raised: "relative z-1",
    footer:
      "border-line flex flex-col-reverse gap-2 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-end",
  },
});
