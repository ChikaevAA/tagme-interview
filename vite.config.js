import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  base: "/",
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
    open: true,
  },
  root: "./src",
  publicDir: "public",
  plugins: [react()],
  resolve: {
    alias: {
      "@app/pages": path.resolve(__dirname, "./src/pages"),
      "@app/styles": path.resolve(__dirname, "./src/styles"),
      "@app/components": path.resolve(__dirname, "./src/components"),
    }
  },
  build: {
    target: "es2015",
    outDir: "../dist",
    rollupOptions: {
      input: {
        app: "./src/index.html",
      },
    },
  },
});
