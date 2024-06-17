import { defineConfig } from "vite";
import dns from "dns";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

dns.setDefaultResultOrder("verbatim"); // 로컬 주소 127.0.0.1 -> localhost로 바꿔줌

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "localhost",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  assetsInclude: ["**/*.PNG", "**/*.png"],
});
