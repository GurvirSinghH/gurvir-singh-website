import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import markdownContent from "./plugins/markdownContent.ts";

export default defineConfig({
  plugins: [markdownContent(), react(), tailwindcss()],
});
