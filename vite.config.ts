import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import NeatuiResolver from "./index.js";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [NeatuiResolver()],
			dts: "src/auto-imports.d.ts",
		}),
		Components({
			resolvers: [NeatuiResolver()],
			dts: "src/components.d.ts",
		}),
	],
});
