import { tv, type VariantProps } from "../../utils/tv";

export const tabs = tv({
  slots: {
    base: "flex",
    list: "relative isolate flex border-line [counter-reset:tabs]",
    trigger: [
      "group relative z-2 inline-flex items-center gap-2 px-4 py-1.5 text-label text-fg-subtle transition-colors [counter-increment:tabs] hover:text-fg [&_svg]:size-4 [&_svg]:shrink-0",
      "data-[state=active]:text-fg",
      "data-disabled:bg-transparent data-disabled:text-fg-disabled",
    ],
    triggerNumber: [
      "text-fg-subtle group-hover:text-fg-muted group-data-[state=active]:text-fg-muted",
      "before:content-[counter(tabs,decimal-leading-zero)]",
      "transition-colors group-data-disabled:text-fg-disabled",
    ],
    indicator: "absolute z-1 border-line bg-surface",
    content: "border-line bg-surface p-4",
  },
  variants: {
    orientation: {
      horizontal: {
        base: "flex-col",
        list: "flex-row border-b",
        trigger: "rounded-t-surface",
        content: "rounded-b-surface border-x border-b",
        indicator: [
          "rounded-t-surface border-x border-t-2 border-t-primary",
          "h-[calc(var(--reka-tabs-indicator-thickness)+1px)] w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        ],
      },
      vertical: {
        base: "flex-row",
        trigger: "min-w-40 rounded-l-surface",
        list: "flex-col border-r",
        content: "grow rounded-r-surface border-y border-r",
        indicator: [
          "rounded-l-surface border-y border-l-2 border-l-primary",
          "h-(--reka-tabs-indicator-size) w-[calc(var(--reka-tabs-indicator-thickness)+1px)] translate-y-(--reka-tabs-indicator-position)",
        ],
      },
    },
    animated: {
      true: {
        indicator: "motion-safe:transition-[translate,width]",
      },
    },
  },
});

export type TabsVariants = VariantProps<typeof tabs>;
