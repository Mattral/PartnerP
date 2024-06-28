import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    remix(),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/images',
          dest: 'assets'
        }
      ]
    })
  ]
});
