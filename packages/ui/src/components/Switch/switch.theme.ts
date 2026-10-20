import { tv } from "../../utils/tv";

export const switchh = tv({
  slots: {
    base: [
      "inline-flex h-5 w-9 items-center justify-start rounded-base p-0.5 transition-colors",
      "data-[state=unchecked]:bg-control-emphasis data-[state=unchecked]:not-data-disabled:hover:bg-control-emphasis-hover",
      "data-[state=checked]:bg-primary data-[state=checked]:not-data-disabled:hover:bg-primary-hover",
      "data-disabled:opacity-50",
    ],
    thumb:
      "inline-block size-4 rounded-base bg-thumb transition-transform data-[state=checked]:translate-x-full",
  },
});
