import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: "pages",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "pages/index.html"),
                design: resolve(__dirname, "pages/design.html"),
                dev: resolve(__dirname, "pages/dev.html"),
                p: resolve(__dirname, "pages/p.html"),
                res: resolve(__dirname, "pages/res.html"),
                tools: resolve(__dirname, "pages/tools.html"),
            },
        },
        outDir: "../dist",
        emptyOutDir: false,
    },
});
