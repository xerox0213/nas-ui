import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { accordion } from "./accordion.theme";

export const [provideAccordionContext, injectAccordionContext] = createContext<{
  ui: ComputedRef<ReturnType<typeof accordion>>;
}>("accordion-context", "AccordionRoot");
