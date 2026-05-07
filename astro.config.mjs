// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    // Enable responsive images:
    layout: 'constrained',
    responsiveStyles: false,
  },
  security: {
    csp: true,
  },
});
