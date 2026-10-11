import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { card } from "./card.theme";

export const [provideCardContext, injectCardContext] = createContext<{
  ui: ComputedRef<ReturnType<typeof card>>;
}>("card-context", "CardRoot");
