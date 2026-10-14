import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { dialog } from "./dialog.theme";

export const [provideDialogContext, injectDialogContext] = createContext<{
  ui: ComputedRef<ReturnType<typeof dialog>>;
}>("dialog-context", "DialogRoot");
