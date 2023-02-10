import viteCompression from "vite-plugin-compression";
import { resolve } from "path";

export default {
    root: "src",
    plugins: [
        viteCompression({
            algorithm: "brotliCompress",
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                guide: resolve(__dirname, "src/style-guide.html"),
            },
        },
        outDir: "../dist",
        emptyOutDir: true,
    },
};
