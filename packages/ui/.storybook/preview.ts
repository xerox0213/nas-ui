import "../src/index.css";

import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import addonThemes, { withThemeByDataAttribute } from "@storybook/addon-themes";
import { definePreview } from "@storybook/vue3-vite";

export const preview = definePreview({
  addons: [addonThemes(), addonDocs(), addonA11y()],
  tags: ["autodocs"],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
        system: "",
      },
      defaultTheme: "system",
      attributeName: "data-theme",
    }),
  ],
});

export default preview;
