import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the build work on GitHub Pages as well as Vercel or Netlify
export default defineConfig({ plugins: [react()], base: "./" });
