import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    compress(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  site: 'https://wizzel-inc.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    port: 4322,
    host: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
  vite: {
    server: {
      cors: true,
      strictPort: true,
      hmr: {
        clientPort: 4322,
        port: 4322
      }
    }
  }
});