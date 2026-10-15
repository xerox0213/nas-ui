import { tv } from "../../utils/tv";

export const accordion = tv({
  slots: {
    root: "overflow-hidden rounded-surface border border-line bg-surface",
    item: "group border-line not-last:border-b",
    header: "",
    trigger: [
      "flex items-center gap-3 px-4 py-3 text-left text-label -outline-offset-2 transition-colors not-data-disabled:hover:bg-hover [&_svg]:size-4 [&_svg]:shrink-0",
      "group-first:rounded-t-[calc(var(--radius-surface)-1px)]",
      "not-group-data-[state=open]:group-last:rounded-b-[calc(var(--radius-surface)-1px)]",
      "data-disabled:text-fg-disabled",
    ],
    chevron:
      "ml-auto text-fg-subtle transition group-hover:text-fg group-data-disabled:text-fg-disabled group-data-[state=open]:rotate-180",
    content: [
      "overflow-hidden px-4 pb-4 text-fg-muted",
      "motion-safe:data-[state=closed]:animate-accordion-up motion-safe:data-[state=open]:animate-accordion-down",
    ],
  },
});
