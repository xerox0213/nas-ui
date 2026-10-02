import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({ tsconfigPath: "./tsconfig.lib.json" }),
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css",
          dest: ".",
          rename: { stripBase: true },
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    rolldownOptions: {
      external: ["vue", "reka-ui", "tailwind-variants", "@lucide/vue"],
    },
  },
});
