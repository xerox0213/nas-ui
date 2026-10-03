import { createMemoryHistory, createRouter } from "vue-router";

// Lets stories render <RouterLink> without changing Storybook's own URL.
export const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/:path(.*)*", component: { render: () => null } }],
});
