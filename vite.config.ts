import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: isDev
      ? {
          host: "::",
          https: {
            key: fs.readFileSync("localhost-key.pem"),
            cert: fs.readFileSync("localhost.pem"),
          },
          port: 5174,
        }
      : undefined,

    plugins: [react(), isDev && componentTagger()].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
