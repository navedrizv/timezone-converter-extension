import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "src/popup", // <-- Set the popup as root
  build: {
    outDir: "../../dist/popup", // <-- Final output will be dist/popup
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "src/popup/index.html"),
    },
  },
});
