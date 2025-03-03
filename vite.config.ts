import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), viteCompression()],
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["react-devtools"],
  },
}));
