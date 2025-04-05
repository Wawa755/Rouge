import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Anytime you import something using "@"
    // it automatically points to the "./src" folder. Makes our import paths
    // way cleaner and easier to manage.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
