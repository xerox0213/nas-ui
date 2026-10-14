import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { alertDialog } from "./alert-dialog.theme";

export const [provideAlertDialogContext, injectAlertDialogContext] =
  createContext<{
    ui: ComputedRef<ReturnType<typeof alertDialog>>;
  }>("alert-dialog-context", "AlertDialogRoot");
