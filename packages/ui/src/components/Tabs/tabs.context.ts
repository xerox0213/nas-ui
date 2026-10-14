import type { ComputedRef } from "vue";

import { createContext } from "../../utils/create-context";
import type { tabs } from "./tabs.theme";

export type TabsCtx = {
  ui: ComputedRef<ReturnType<typeof tabs>>;
};

export const [provideTabsContext, injectTabsContext] = createContext<TabsCtx>(
  "tabs",
  "TabsRoot",
);
