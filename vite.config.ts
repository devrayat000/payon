import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsPaths(), react()],
  server: {
    port: 3000,
  },
});
