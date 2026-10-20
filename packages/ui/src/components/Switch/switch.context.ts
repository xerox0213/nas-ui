import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { switchh } from "./switch.theme";

export const [provideSwitchContext, injectSwitchContext] = createContext<{
  ui: ComputedRef<ReturnType<typeof switchh>>;
}>("switch-context", "SwitchRoot");
