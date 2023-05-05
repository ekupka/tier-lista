import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "",
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
});
