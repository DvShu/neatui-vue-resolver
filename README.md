# neatui-vue-resolver

针对于 [neatui-vue](https://www.npmjs.com/package/@asteres/neatui-vue) 的 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) 的自动导入。

## 使用

### 安装依赖
1. 安装 UI 库
```shell
npm install @asteres/neatui-vue
```

2. 安装自动导入插件
```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

3. 修改 Vite 配置

```js
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
```

4. 引入全局 CSS 变量文件

在 `main.ts` 中引入全局 CSS 变量文件

```js
import "@asteres/neatui-vue/style/vars.css";
```

## neatui-vue 文档

[neatui-vue文档](https://neatui.github.io/neatui-vue/)

## LICENSE
neatui-vue is open source software licensed as [MulanPSL2](https://github.com/DvShu/neatui-vue-resolver/blob/main/LICENSE).
