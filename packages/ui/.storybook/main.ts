import { defineMain } from "@storybook/vue3-vite/node";

export default defineMain({
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-themes",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  // Needed for vue-component-meta to read the component's JSDoc description.
  features: { experimentalDocgenServer: true },
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      // Resolved from the monorepo root.
      docgen: {
        plugin: "vue-component-meta",
        tsconfig: "packages/ui/tsconfig.lib.json",
      },
    },
  },
});
