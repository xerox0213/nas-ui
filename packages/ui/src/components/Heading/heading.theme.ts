import type { VariantProps } from "../../utils/tv";
import { tv } from "../../utils/tv";

export const heading = tv({
  base: "font-sans",
  variants: {
    level: {
      display: "text-display",
      "1": "text-heading-1",
      "2": "text-heading-2",
      "3": "text-heading-3",
      "4": "text-heading-4",
    },
  },
});

export type HeadingVariants = VariantProps<typeof heading>;
