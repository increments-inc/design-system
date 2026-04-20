// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
  ],
  site: 'https://design.incrementsinc.com',
  server: {
    port: 4321,
    host: true,
  },
});
