import { type ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { alert, AlertVariants } from "./alert.theme";

export const [provideAlertContext, injectAlertContext] = createContext<{
  ui: ComputedRef<ReturnType<typeof alert>>;
  close: () => void;
  variant: ComputedRef<Exclude<AlertVariants["variant"], undefined>>;
  /** Links `AlertTitle` to the close button accessible name. */
  titleId: string;
}>("AlertContext", "AlertRoot");
