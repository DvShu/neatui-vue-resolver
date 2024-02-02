function kebabCase(key) {
	const result = key.replace(/([A-Z])/g, " $1").trim();
	return result.split(" ").join("-").toLowerCase();
}

export default function neatuiResolver() {
	return [
		{
			type: "component",
			resolve: (name) => {
				if (name.startsWith("Nt")) {
					const componentName = name.slice(2);
					const styleName = kebabCase(componentName);
					return {
						name: componentName,
						from: "@asteres/neatui-vue",
						sideEffects: `@asteres/neatui-vue/style/${styleName}/index.js`,
					};
				}
			},
		},
		{
			type: "directive",
			resolve: (name) => {
				const directives = {
					Clickoutside: {
						importName: "Clickoutside",
						styleName: undefined,
					},
				};
				if (Object.hasOwn(directives, name)) {
					return {
						name: directives[name].importName,
						from: "@asteres/neatui-vue",
						sideEffects: directives[name].styleName,
					};
				}
			},
		},
	];
}
