import { tv, type VariantProps } from "../../utils/tv";

export const tabs = tv({
  slots: {
    base: "flex",
    list: "border-line relative flex [counter-reset:tabs]",
    trigger: [
      "text-fg-subtle hover:text-fg group text-label relative z-2 inline-flex items-center gap-2 px-4 py-1.5 transition-colors [counter-increment:tabs]",
      "data-[state=active]:text-fg",
      "data-disabled:text-fg-disabled data-disabled:bg-transparent",
    ],
    triggerNumber: [
      "text-fg-subtle group-hover:text-fg-muted group-data-[state=active]:text-fg-muted",
      "before:content-[counter(tabs,decimal-leading-zero)]",
      "group-data-disabled:text-fg-disabled transition-colors",
    ],
    indicator: "bg-surface border-line absolute z-1",
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
          "border-t-primary rounded-t-surface border-x border-t-2",
          "h-[calc(var(--reka-tabs-indicator-thickness)+1px)] w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        ],
      },
      vertical: {
        base: "flex-row",
        trigger: "rounded-l-surface min-w-40",
        list: "flex-col border-r",
        content: "rounded-r-surface grow border-y border-r",
        indicator: [
          "border-l-primary rounded-l-surface border-y border-l-2",
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
