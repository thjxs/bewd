import { HtmlTagDescriptor, loadEnv } from "vite";
import main from "@bewd/log-app-info";

export function vitePluginLogAppInfo() {
  return {
    name: "vite-plugin-app-info",
    transformIndexHtml(): HtmlTagDescriptor[] {
      const env = loadEnv("", process.cwd(), "");
      return [
        {
          tag: "script",
          children: main(env.APP_VERSION || "unknow"),
          injectTo: "head",
        },
      ];
    },
  };
}
