import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "127.0.0.1", // évite les bugs localhost/IPv6/proxy/VPN
    port: 5173, // port fixe
    strictPort: true, // si occupé, Vite te le dit au lieu de changer en silence
    open: true, // optionnel: ouvre le navigateur
  },
});
