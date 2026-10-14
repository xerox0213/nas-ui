import type { VariantProps } from "tailwind-variants/dist/types.cjs";

import { tv } from "../../utils/tv";
import { dialog } from "../Dialog/dialog.theme";

export const alertDialog = tv({
  extend: dialog,
});

export type AlertDialogVariants = VariantProps<typeof alertDialog>;
