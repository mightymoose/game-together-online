import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://host.docker.internal:4000",
        ws: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "happy-dom",
    exclude: ["tests", "node_modules"],
    alias: {
      "@support": path.resolve(__dirname, "./src/test/support"),
    },
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      all: true,
      include: ["src"],
      exclude: ["src/**/*.page.*"],
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
});
