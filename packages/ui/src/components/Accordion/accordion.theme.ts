import { tv } from "../../utils/tv";

export const accordion = tv({
  slots: {
    root: "bg-surface rounded-surface border-line overflow-hidden border",
    item: "border-line group not-last:border-b",
    header: "",
    trigger: [
      "not-data-disabled:hover:bg-hover text-label flex items-center justify-between gap-3 px-4 py-3 text-left -outline-offset-2 transition-colors",
      "group-first:rounded-t-[calc(var(--radius-surface)-1px)]",
      "not-group-data-[state=open]:group-last:rounded-b-[calc(var(--radius-surface)-1px)]",
      "data-disabled:text-fg-disabled",
    ],
    chevron:
      "text-fg-subtle group-hover:text-fg group-data-disabled:text-fg-disabled transition group-data-[state=open]:rotate-180",
    content: [
      "text-fg-muted overflow-hidden px-4 pb-4",
      "motion-safe:data-[state=open]:animate-accordion-down motion-safe:data-[state=closed]:animate-accordion-up",
    ],
  },
});
