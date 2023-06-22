import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      assets: "/src/assets",
      components: "/src/components",
      containers: "/src/containers",
      hoc: "/src/hoc",
      services: "/src/services",
      utils: "/src/utils",
      routes: "/src/routes",
      hooks: "/src/hooks",
      UI: "/src/components/UI",
      store: "/src/store",
    },
  },
});
