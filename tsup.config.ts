import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: ["src/index.ts"],
    format: ["cjs", "esm"],
    outDir: "dist",
    sourcemap: true,
    minify: true,
    clean: true,
});
