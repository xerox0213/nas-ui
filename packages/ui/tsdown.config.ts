import { defineConfig } from "tsdown";
import vue from "unplugin-vue/rolldown";

export default defineConfig({
  entry: ["./src/index.ts"],
  tsconfig: "./tsconfig.lib.json",
  platform: "neutral",
  plugins: [vue({ isProduction: true })],
  copy: "./src/index.css",
  dts: { vue: true, sourcemap: true },
});
