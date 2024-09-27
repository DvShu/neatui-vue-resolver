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
          let effectStyle = `@asteres/neatui-vue/style/${styleName}/index.js`;
          if (componentName.endsWith("Item")) {
            effectStyle = undefined;
          }
          if (componentName.endsWith("Icon")) {
            effectStyle = "@asteres/neatui-vue/style/icon/index.js";
          }
          if (componentName === "CheckboxGroup") {
            effectStyle = undefined;
          }
          return {
            name: componentName,
            from: "@asteres/neatui-vue",
            sideEffects: effectStyle,
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
          Loading: {
            importName: "Loading",
            styleName: "@asteres/neatui-vue/style/loading/index.js",
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
