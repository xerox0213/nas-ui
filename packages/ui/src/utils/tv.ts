import { createTV } from "tailwind-variants";

export const tv = createTV({
  twMergeConfig: {
    extend: {
      theme: {
        text: [
          "display",
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "body-lg",
          "body",
          "label",
          "caption",
          "meta",
        ],
        radius: ["base", "surface"],
      },
    },
  },
});

export type { VariantProps } from "tailwind-variants";
