import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Web3/', // <--- AGREGA ESTA LÍNEA (Asegúrate que "Web3" sea el nombre exacto de tu repo en GitHub)
});