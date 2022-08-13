import image from '@astrojs/image';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});